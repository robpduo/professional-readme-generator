import { copyFile, writeFile } from 'fs';

function generateMarkdown(data) {
  return new Promise( (resolve, reject) => {
    writeFile('./dist/README.md', data, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Readme File Created!'
      });

    });
  });
}

export default generateMarkdown;
