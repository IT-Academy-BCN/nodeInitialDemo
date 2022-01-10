const path = require('path');
const { v4: uuidv4 } = require('uuid');



const upload = (req, res) => {

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).json({ msg: 'No files were uploaded' });
    return;
  }

  if (!req.files.file) {
    res.status(400).json({ msg: 'No files were uploaded' });
    return;
  } 

  const { file } = req.files;
  const nameYext = file.name.split('.')  
  const extension = nameYext[ nameYext.length - 1]; 

  const extensiones = ['png', 'jpg', 'gif'];
  if(!extensiones.includes(extension)){
      return res.status(400).json({ msg: `La extension ${ extension} no esta permitida` });
  }

  const nombre = uuidv4();
  file.name = `${nombre}.${extension}`  
  console.log('nombre nuevo', file.name)
  const uploadPath = path.join(__dirname, '../filesuploads/', file.name);

  file.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).json({ err });
    }

    console.log('file upload')

    res.status(200).json({ msg: 'File uploaded... ok ' });
  });
}

module.exports = upload