//carregando o express
const express = require("express");
const app = express();

let games = [
    {title: "Sea of Thieves", studio: "rare", price: 30},
    {title: "Need For Speed", studio: "Eletronic Arts", price: 100},
    {title: "Counter-Strike 1.6", studio: "Valve Corporation", price: 60},
    {title: "Call Of Duty", studio: "Actvision", price: 0},
    {title: "Minecraft", studio: "Mojang", price: 120},
    {title: "GTA V", studio: "Rockstar North", price: 30},
    {title: "Halo", studio: "Eletronic Arts", price: 100},
    {title: "Bloons TD6", studio: "Loop Hero", price: 60},
    {title: "GTA SanAndreas", studio: "Rockstar North", price: 0},
    {title: "Roblox", studio: "Microsoft", price: 120}
]

app.get("/", (req,res) =>{

    //res.send("Olá mundo!");
    res.json(games);
});



app.listen(3080, () => {
    console.log("servidor OK!");
});