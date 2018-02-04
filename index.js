const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
  if (message.content === 'When I saw you') {
   // message.reply('pong');
    message.channel.sendMessage('neomaneul saenggakhago');
  }
});


bot.on('message', message => {
  if (message.content === 'when I love you') {
   // message.reply('pong');
    message.channel.sendMessage('hmmmmm');
  }
});

bot.on('message', message => {
  if (message.content === 'did you miss me?') {
   // message.reply('pong');
    message.channel.sendMessage('nae mami byeonhandaedo');
  }
});

bot.on("ready", () => {
  bot.user.setPresence({game: {name:"SINGING WITH WONHO BOT"}})
  console.log('I have jackoo: {SERVERNAME}')
})

bot.on('message', message => {
  if (message.content === 'hmmmm') {
   // message.reply('pong');
    message.channel.sendMessage('I will');
  }
});

bot.on('message', message => {
  if (message.content === 'I wish you next') {
   // message.reply('pong');
    message.channel.sendMessage('to me like this');
  }
});

bot.on('message', message => {
  if (message.content === 'Can I go back...') {
   // message.reply('pong');
    message.channel.sendMessage('When I saw you?');
  }
});

bot.on('message', message => {
  if (message.content === 'Always behind of you') {
   // message.reply('pong');
    message.channel.sendMessage('Always behind of you...');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});


bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'JIU');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});


// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});


bot.login('');
