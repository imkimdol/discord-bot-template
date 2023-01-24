const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping_followup')
		.setDescription('Replies with \'Pong!\', and follows up with another \'Pong!\''),
	async execute(interaction) {
		await interaction.reply('Pong!');
		await interaction.followUp('Pong again!');
		// For ephemeral:
		//await interaction.followUp({ content: 'Pong again!', ephemeral: true });
	},
};