let desserts = require('./db.json');


module.exports = {

    getAllDesserts: (req, res) => {
        res.status(200).send(desserts)
        for (let i =0;i<desserts.length;i++)
        {
            desertItem = desserts[i]
            
        }
    },


/////////////////////////////////////////////////////////////
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getDessert:(req, res) => {
        const desserts = ["Get some ice Cream!","Get some cake!","Get some cookies!","Get some pie!","Get some banana pudding!"];
        let randomIndex = Math.floor(Math.random() * desserts.length);
        let randomDessert = desserts[randomIndex];
      
       

            res.status(200).send(randomDessert);
},

}