import express from 'express';

const app = express();

app.listen(3000, ()=>{
    console.log(`Server is up and running at port ${3000}`);
})