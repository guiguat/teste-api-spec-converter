const express = require("express");
const Converter = require('api-spec-converter');

const app = express()
app.use(express.json());
const PORT = 3000

app.post("/", async (req, res)=>{
    const source = req.body;
    const converted = await Converter.convert({
        from: 'openapi_3',
        to: 'swagger_2',
        source
    })
    res.json(JSON.parse(converted.stringify()))
})

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})