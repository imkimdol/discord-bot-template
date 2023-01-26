const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping_attachment')
        .setDescription('Replies with \'Pong!\' and an attached image.'),
    async execute(interaction) {
        const attachment = new AttachmentBuilder('https://i.imgur.com/AfFp7pu.png', { name: 'image.png' });

        await interaction.reply({ content: 'Pong!', files: [attachment]});
    },
};