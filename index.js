const { Client, Intents } = require('discord.js-selfbot-v13');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.MESSAGE_CONTENT],
  checkUpdate: false 
});

client.once('ready', () => {
  console.log('Selfbot is online!');
});

// Listening for message creation
client.on('messageCreate', async (message) => {
    // Check if the message contains any embeds
    if (message.embeds.length > 0) {
      const embed = message.embeds[0];

      if (embed.title === "Your Idle Fishing Storage is Full!") {
        console.log('Found the fishing storage full message!');
        console.log('Sending fish idle command')
        const dchannel = await client.channels.fetch("1275095319016902656")
        dchannel.send("testing");
        dchannel.sendSlash('270904126974590976', "fish idle")
      }
    }
});

client.on("messageCreate", async (message) => {
    if(message.channel.id == '1275095319016902656') {
    if (message.content == 'test') {
      const dchannel = await client.channels.fetch("1275095319016902656")
      dchannel.send("testing");
      dchannel.sendSlash('270904126974590976', "fish idle")
    }
  }
  });

client.on("messageCreate", async (message) => {
    if(message.channel.id == '1275095319016902656') {
        if (message.embeds.length > 0) {
            const embed = message.embeds[0];
      
        if (embed.title === "Idle Fishing" && message.components.length > 0) {
        const button = message.components[0].components.find(
          btn => btn.label === "Collect"
        );

        if (button) {
          console.log("Go Fishing button found. Clicking...");
             message.clickButton(button.customId);
            console.log("Button clicked successfully!");
        }
    }
    }
    }
});

// Log in to Discord with your app's token
client.login(TOKEN);
