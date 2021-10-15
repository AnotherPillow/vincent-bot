const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"] , intents: ["GUILD_MESSAGES", "GUILDS", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGE_REACTIONS"]});

const prefix = 'cw!';

const fs = require('fs');

const { MessageEmbed } = require('discord.js');

client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log('entered eating competition aka bot online');
	// client.user.setPresence({ activities: [{ name: 'In a chicken wing eating competition', type: 'COMPETING' }], status: 'online' });
	//client.user.setPresence({ activities: [{ name: 'Some game idk what im doing im bored', type: 'PLAYING' }], status: 'dnd' });
	client.user.setPresence({ activities: [{ name: 'The Weeknd on loop 🤨', type: 'LISTENING' }], status: 'dnd' });
});

client.on('message', message => {

	if (message.content.toUpperCase() == 'HI' || message.content.toUpperCase().includes('HI ')) {
		message.react('👋');
		return null;
	}
	if (message.content.toUpperCase() == 'MAI' || message.content.toUpperCase().includes('MAI ')) {
		message.react('<:blankybot2sbmai:885229893644873728>');
		return null;
	}
	if (message.content.toUpperCase().includes('STARBAIT')) {
		message.react('<:blankybot2starbait4:895374199626014773>');
		return null;
	}
	if (message.content.toUpperCase().includes('ANGRY')) {
		message.react('<:angry_face:894597035871858749>');
		return null;
	}

	//msgs = msgs not cmds

	if (message.content.toUpperCase().includes('DEVAN')) {
		message.channel.send('https://cdn.discordapp.com/attachments/893641996315553802/896501471795884073/bee.jpg');
		return null;
	}
	if (message.content.toUpperCase().includes('MISTYOLD')) { 
		message.channel.send('https://cdn.discordapp.com/attachments/895714191707623534/896326116376215552/pet.gif');
		return null;
	}
	if (message.content.toUpperCase().includes('MISTY')) {
		message.channel.send('https://cdn.discordapp.com/attachments/893642074614792192/897149762590101505/pet.gif');
		return null;
	}
	/*if (message.content.toUpperCase().includes('TEST')) {
		const exampleEmbed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org/')
			.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
			.setDescription('Some description here')
			.setThumbnail('https://i.imgur.com/AfFp7pu.png')
			.addFields(
				{ name: 'Regular field title', value: 'Some value here' },
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
			)
			.addField('Inline field title', 'Some value here', true)
			.setImage('https://i.imgur.com/AfFp7pu.png')
			.setTimestamp()
			.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

		channel.send({ embeds: [exampleEmbed] });
	}*/

	//if (message.content.toUpperCase() == 'BLANKY'){
	//	message.channel.send('Blanky!');
	//	return null;
	//}
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'embedtest') {
		const exampleEmbed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org/')
			.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
			.setDescription('Some description here')
			.setThumbnail('https://i.imgur.com/AfFp7pu.png')
			.addFields(
				{ name: 'Regular field title', value: 'Some value here' },
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
			)
			.addField('Inline field title', 'Some value here', true)
			.setImage('https://i.imgur.com/AfFp7pu.png')
			.setTimestamp()
			.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

		message.channel.send({ embeds: [exampleEmbed] });
	}
	else if (command === 'dmpillow') {
		client.users.fetch('718881941465596026').then(user => {
			user.send('hello');
		})
	}

  //if(command === 'ping'){
//		message.channel.send('Pong.');
  //} else if (command === 'blanky'){
  //    client.commands.get('blanky').execute(messageCreate, args);
  //} else if (command === 'pillow'){
  //	  client.commands.get('pillow').execute(messageCreate, args);
  //} else if (command === 'pillow') {
//	  client.commands.get('pillow').execute(messageCreate, args);
  //} else if (command === 'blanky') {
	//  message.channel.send('Blanky!');
//  } else if (command === 'sbmai') {
//	  message.channel.send(' <:blankybot2sbmai:885229893644873728> ');
  //} else if (command === 'quag') {
//	  message.channel.send(' <:blankybot2quag:885229893510643713> ');
 // } else if (command === 'pleadingtaco') {
//	  message.channel.send(' <:blankybot2pleadingtaco:885229893703598090> ');
 // } else if (command === 'pleadinghearts') {
//	  message.channel.send(' <:blankybot_pleadinghearts:885229893594517556> ');
  //}
	//thisisamessage.react("👋");


});

client.login('token');
