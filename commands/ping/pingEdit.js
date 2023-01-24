const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping_edit')
		.setDescription('Replies with \'Pong!\', then edits the message after a delay.'),
	async execute(interaction) {
		await interaction.reply('Pong!');
		await wait(2000);
		await interaction.editReply('Pong, but edited!');
	},
};