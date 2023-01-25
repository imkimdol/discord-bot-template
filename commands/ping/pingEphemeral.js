const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping_ephemeral')
        .setDescription('Replies (in secret) with Pong!'),
    async execute(interaction) {
        await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
    },
};