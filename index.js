const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());

app.get('/getTodo',(req,res)=>{
    // console.log(todo)
    res.send('g')
})

app.listen(3001, () => {
  console.log('server is running in port 3000');
})