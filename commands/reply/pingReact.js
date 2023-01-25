const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping_react')
        .setDescription('Replies with \'Pong!\' and reacts to the reply with 😄.'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Pong!', fetchReply: true });
        message.react('😄');
    },
};