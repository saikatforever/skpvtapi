const express = require('express');
var cors = require('cors')

const app = express ();
app.use(express.json());
app.use(cors())
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server started on port " + PORT)
    app.get('/all', function (req, res) {
        return res.json("Working")
     })
})
