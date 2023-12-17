import { GoogleSpreadsheet } from 'google-spreadsheet';
 import { JWT } from 'google-auth-library';
 import * as secret from "../../../durable-cycle-408401-e343cb4938f2.json"

 export type UsersRowData = {
    date: string;
    title: string;
    description: string;
  };
  
export async function getDataFromGoogleSheet(table_id:string) {
    
    // Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication
    const serviceAccountAuth = new JWT({
      // env var values here are copied from service account credentials generated by google
      // see "Authentication" section in docs for more info
      email: secret.client_email,
      key: secret.private_key,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });
  
  const doc = new GoogleSpreadsheet(table_id, serviceAccountAuth);
  await doc.loadInfo(); // loads document properties and worksheets 
  const sheet = doc.sheetsByIndex[0];

  const userRows = await sheet.getRows<UsersRowData>();
  
  const data=userRows.map((row)=>{
    const new_row:UsersRowData={
        date: row.get("date"),
        title: row.get("title"),
        description: row.get("description")
    }
    return new_row
  })
return data
}
   
    


// Вызов функции для получения данных из Google таблицы

