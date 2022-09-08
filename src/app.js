const app = require('express')();
const config = require('../config.json')

app.get('/api', async (req, res) => {
      
       res.json(content);
})

app.listen(config.port, async () => {
    console.log(`App listening on port ${config.port}`);
})