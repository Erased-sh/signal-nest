import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import * as private_key from "../../../durable-cycle-408401-e343cb4938f2.json";
import { GridingProps } from '../components/grid/grid';



export async function getTeamsDataFromGoogleSheet(table_id: string): Promise<GridingProps[][]> {
  const serviceAccountAuth = new JWT({
    email: private_key.client_email,
    key: private_key.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const arr = [0, 1, 2, 3, 4];
  const doc = new GoogleSpreadsheet(table_id, serviceAccountAuth);

  await doc.loadInfo(); // loads document properties and worksheets

  const allTeamsPromises = [];
  for (const numb of arr) {
    const sheet = doc.sheetsByIndex[numb];
    await sheet.loadCells("A1:F40"); // Load cells for the entire sheet once

    const userRows = await sheet.getRows();

    const dataPromises = userRows.map(async (row) => {
      const cell = sheet.getCellByA1("F" + row.rowNumber); // Get cell without awaiting
      const new_row: GridingProps = {
        img: cell.hyperlink || "",
        name: row.get("name"),
        birthday: row.get("birthday"),
        placeofbirthday: row.get("placeofbirthday"),
        faculty: row.get("faculty"),
        year: row.get("year"),
      };
      return new_row;
    });

    allTeamsPromises.push(Promise.all(dataPromises));
  }

  return Promise.all(allTeamsPromises);
}





