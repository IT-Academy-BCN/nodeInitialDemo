// database connection
const mongoose = require('mongoose');
const { DB } = require('./config');

mongoose.connect(DB)
    .then(db => console.log('✔️  database ready!'))
    .catch(err => console.log(`❌ database NOT ready`))
