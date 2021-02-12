const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send(`<p>To install the bot please go to <a href="https://discordapp.com/oauth2/authorize?client_id=809842951831683072&scope=bot">https://discordapp.com/oauth2/authorize?client_id=809842951831683072&scope=bot</a><p><p>For documentation please go to <a href="https://github.com/briannakeune/ffxiv-discord-automation#readme">https://github.com/briannakeune/ffxiv-discord-automation#readme</a></p>`)
})

module.exports = function(PORT) {
    app.listen(PORT, console.log(`Server is listening...`))
}