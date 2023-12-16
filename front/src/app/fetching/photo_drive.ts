import { google } from 'googleapis';

export const getPhotosDrive = async () => {
  const keyFilePath = 'front/noble-beanbag-408304-849a2d948148.json';
  const keys = require(keyFilePath);

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: keys.client_email,
      private_key: keys.private_key,
    },
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });

  const drive = google.drive({ version: 'v3', auth });


    const res = await drive.files.list({
      q: "'root' in parents and name='photos' and mimeType='image/jpeg'"
    });
    

    const files = res.data.files;
    if (files?.length) {
      const urls = await Promise.all(files.map(async (file) => {
      
          const fileInfo = await drive.files.get({
            fileId: file.id || '',
            fields: 'webContentLink',
          });
          console.error(fileInfo.data.webContentLink)
          return fileInfo.data.webContentLink || '';
        
      }));
      return urls.filter(url => url !== '');
    } else {
      console.log('No files found.');
      return [];
    }
  
};
