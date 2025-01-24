const express = require('express');
const path = require('node:path');
const fs = require('fs');
const { error } = require('node:console');
const app = express();

app.use(express.static('public'));

app.get('/data', (req,res)=>{
  const lang = req.query.lang || 'en';
  const filePath = path.join(__dirname,`/asset/traduction/${lang}.json`);
  if (fs.existsSync(filePath)){
    const data = JSON.parse(fs.readFileSync(filePath,'utf-8'));
    res.json(data);
    }else{
      res.status(404).json({error:'Language file not found'});
    }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});