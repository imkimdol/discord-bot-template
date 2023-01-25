const { SlashCommandBuilder } = require('discord.js');
const { client } = require('../../index.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear_activity')
		.setDescription('Clear the bot\'s visible activity.'),
	async execute(interaction) {
		client.user.setActivity();
        await interaction.reply({ content: 'Cleared visible activity.', ephemeral: true });
	},
};