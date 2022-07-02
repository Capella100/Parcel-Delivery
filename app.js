const express = require ('express');
const cors = require("cors")

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())

const parcels =[
    {
        id:1,
        product: "phone",
        description: "An Apple iPhone",
        deliveryDate: "05/06/2022"
    },
    {
        id:2,
        product: "Laptop",
        description: "An MacBook Air",
        deliveryDate: "07/06/2022"
    },
    {
        id:3,
        product: "Bag",
        description: "A Birkin Bag",
        deliveryDate: "08/06/2022"
    }
]

app.get('/parcels', (req, res) => {
    res.json({
       data:parcels
    })
})


app.listen(PORT, () => {
    console.log(`connected to PORT ${PORT}`);
})