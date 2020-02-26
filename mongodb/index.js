const mongoose = require("mongoose");
//const connectionString = "";
const {MONGO_URI} = require("./config");
const axios = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");

//mongoose.connect(connectionString, {useNewUrlParser: true});
mongoose.connect(MONGO_URI, {useNewUrlParser: true});
const {BreakingNew} = require("./models");

//0 */4 * * * Ejecuta el cron job cada 4 hs. Ver en crontab.guru
cron.schedule("* * * * * *", async()=> {

    console.log("Cron Job Executed")
    const html = await axios.get("https://cnnespanol.cnn.com/");
    const $ = cheerio.load(html.data);
    const titles = $(".news__title");
    titles.each((index, element)=> {
        const breakingNew = {
            title: $(element).text().toString(),
            link: $(element).children().attr("href")
        };

        BreakingNew.create([breakingNew])
    });

});

/* 
Ejemplo de instanciacion de un modelo
const Cat = mongoose.model("Cat", {name: String});
const kitty = new Cat({name:"Garfield"});
kitty.save().then(()=> console.log('Cat has been saved')); */
