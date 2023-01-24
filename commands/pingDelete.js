const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping_delete')
		.setDescription('Replies with \'Pong!\', then deletes the reply after a delay.'),
	async execute(interaction) {
		await interaction.reply('Pong!');
		await wait(4000);
		await interaction.deleteReply();
	},
};