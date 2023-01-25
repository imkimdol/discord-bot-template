const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping_react_multiple')
        .setDescription('Replies with \'Pong!\' and reacts to the reply multiple times.'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Pong!', fetchReply: true });
        
        message.react('🍎')
            .then(() => message.react('🍊'))
            .then(() => message.react('🍇'))
            .catch(error => console.error('One of the emojis failed to react:', error));
    },
};