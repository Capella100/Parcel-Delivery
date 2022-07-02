const express = require ('express');
const cors = require("cors")

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());


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

app.get('/parcels/:id', (req, res) => {
    const {id} = req.params;
    console.log("ID", id)
    let found = parcels.find((parcel) => parcel.id === parseInt(id) )
    if (found){
        res.status(200).json({data: found})
    }
    else{
        res.sendStatus(404)
    }
})

app.post('/parcels', (req, res) => {
    const parcel = req.body;
    try{
        
        parcels.push(parcel);
        res.status(201).json({data: parcel})
    }
    catch(err){
        res.status(400).json({
            err
        })
    }
})


app.listen(PORT, () => {
    console.log(`connected to PORT ${PORT}`);
})