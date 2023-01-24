const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping_deferred')
		.setDescription('Replies with \'Pong!\', but only after a delay.'),
	async execute(interaction) {
		await interaction.deferReply(); // Bot cannot send messages after deferral
		// For ephemeral:
		// await interaction.deferReply({ ephemeral: true });
		await wait(4000);
		await interaction.editReply('Pong!');
	},
};