import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import * as secret from "../../../durable-cycle-408401-e343cb4938f2.json";
import { GridingProps } from '../components/grid/grid';



export async function getTeamsDataFromGoogleSheet(table_id: string) {
  const serviceAccountAuth = new JWT({
    email: secret.client_email,
    key: secret.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(table_id, serviceAccountAuth);
  await doc.loadInfo(); // loads document properties and worksheets
  
  const sheet = doc.sheetsByIndex[0];
  const userRows = await sheet.getRows();
  await doc.loadCells("A1:F40")

  const dataPromises = userRows.map(async (row) => {
    const cell=await sheet.getCellByA1("F"+row.rowNumber)
    const new_row: GridingProps= {
        img: cell.hyperlink||"",
        name: row.get("name"),
        birthday: row.get("birthday"),
        placeofbirthday: row.get("placeofbirthday"),
        faculty: row.get("faculty"),
        year: row.get("year")
    };
    return new_row;
  });

  const dataArray = await Promise.all(dataPromises);
  return dataArray;
}