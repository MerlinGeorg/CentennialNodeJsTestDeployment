import express from "express";

const app = express();
app.get ('/', (req,res) => {
    res.send("hello world")
});

app.get('/test', (req,res) => {
    res.send("hello world test")
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})