require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

const token = process.env.TOKEN;

const prefix = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === prefix + "create") {
    const dailyRoulettes = [
      "567",
      "leveling",
      "trials",
      "msq",
      "guildhests",
      "alliance raids",
      "normal raids",
      "frontline",
    ];

    shuffleArray(dailyRoulettes);
    const today = getCurrentDate();

    let message = createScheduleString(dailyRoulettes, today);

    msg.reply(message);
  }
});

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function getCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  today = mm + "/" + dd;

  return today;
}

function createScheduleString(dailies, today) {
  let message = "";
  let date = `\n**${today}**\n`;

  for (let i = 0; i < dailies.length; i++) {
    message += `${i + 1}. ${dailies[i]}\n`;
  }

  return date + message;
}

client.login(token);
