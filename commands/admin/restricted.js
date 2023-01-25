const { SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('restricted')
        .setDescription('A command restricted to the bot owner.')
        .setDMPermission(false),
    async execute(interaction) {
        if (interaction.user.id === process.env.OWNER_ID) {
            await interaction.reply({ content: 'Command successful.', ephemeral: true });
        } else {
            await interaction.reply({ content: 'You are not permitted to use this command.', ephemeral: true });
        }
    },
};