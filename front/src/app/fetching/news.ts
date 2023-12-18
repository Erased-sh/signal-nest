import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import * as secret from "../../../durable-cycle-408401-e343cb4938f2.json";

export type UsersRowData = {
  date: string;
  title: string;
  description: string;
  img:string | undefined
 
};

export async function getDataFromGoogleSheet(table_id: string) {
  const serviceAccountAuth = new JWT({
    email: secret.client_email,
    key: secret.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(table_id, serviceAccountAuth);
  await doc.loadInfo(); // loads document properties and worksheets
  
  const sheet = doc.sheetsByIndex[0];
  const userRows = await sheet.getRows();
  await doc.loadCells("A1:E10")

  const dataPromises = userRows.map(async (row) => {
    const cell=await sheet.getCellByA1("D"+row.rowNumber)
    const new_row: UsersRowData = {
      date: row.get("date"),
      title: row.get("title"),
      description: row.get("description"),
      img:cell.hyperlink
    
    };
    return new_row;
  });

  const dataArray = await Promise.all(dataPromises);
  return dataArray;
}
