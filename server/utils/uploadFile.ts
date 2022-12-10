import fs from 'fs-extra';
import multer from 'multer';

export const uploadFile = (dest: string) => {
  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      const path = `./uploads/${dest}`;
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
      }
      callback(null, path);
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  });

  const upload = multer({ storage });
  return upload;
};
