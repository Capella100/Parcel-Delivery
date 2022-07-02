const express = require ('express');
const cors = require("cors")

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
})


app.listen(PORT, () => {
    console.log(`connected to PORT ${PORT}`);
})