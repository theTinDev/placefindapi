const app = require('express')();
const config = require('../config.json')

app.get('/products', async (req, res) => {
    const products = [
        {
          id: 1,
          name: "hammer",
        },
        {
          id: 2,
          name: "screwdriver",
        },
        {
          id: 3,
          name: "wrench",
        },
       ];
      
       res.json(products);
})

app.listen(config.port, async () => {
    console.log(`App listening on port ${config.port}`);
})