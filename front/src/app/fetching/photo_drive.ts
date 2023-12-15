import { google } from 'googleapis';

export const getPhotosDrive = async () => {
  const keyFilePath = '/path/to/your/credentials.json';
  const keys = require(keyFilePath);

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: keys.client_email,
      private_key: keys.private_key,
    },
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });

  const drive = google.drive({ version: 'v3', auth });

  try {
    const res = await drive.files.list({
      q: "'Folder' in parents", // Заменить 'Folder' на нашу папку
    });

    const files = res?.data.files;
    if (files?.length) {
      const urls = await Promise.all(files.map(async (file) => {
        try {
          const fileInfo = await drive.files.get({
            fileId: file.id || '',
            fields: 'webContentLink',
          });
          return fileInfo.data.webContentLink || '';
        } catch (error) {
          console.error('Error fetching file info:', error);
          return '';
        }
      }));
      return urls.filter(url => url !== '');
    } else {
      console.log('No files found.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching files:', error);
    return [];
  }
};
