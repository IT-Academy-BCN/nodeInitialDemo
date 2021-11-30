const path = require('path');

const upload = (req, res) => {

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded');
    return;
  }

  if (!req.files.file) {
    res.status(400).send('No files were uploaded');
    return;
  } 

  const { file } = req.files;
  const nameExt = file.name.split('.')
  const extension = nameExt[ nameExt.length - 1];

  const extensiones = ['png', 'jpg', 'gif'];
  if(!extensiones.includes(extension)){
      return res.status(400).send(`La extension ${ extension} no esta permitida`);
  }

  const uploadPath = path.join(__dirname, '../filesuploads/', file.name);

  file.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).json({ err });
    }

    console.log('file upload')

    res.send('File uploaded... ok ');
  });
}

module.exports = upload