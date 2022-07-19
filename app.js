const express = require('express');
const cors = require("cors")
const parcelRouter = require('./routes/parcel');
const authRouter = require('./routes/auth');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use('/parcels', parcelRouter)
app.use('/auth', authRouter)


app.listen(PORT, () => {
    console.log(`connected to PORT ${PORT}`);
})