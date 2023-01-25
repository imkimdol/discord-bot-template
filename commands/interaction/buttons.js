const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('buttons')
        .setDescription('Replies with a message that has a row of buttons.'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('primary')
                    .setLabel('Primary')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('secondary')
                    .setLabel('Secondary')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('success')
                    .setLabel('Success')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('danger')
                    .setLabel('Danger')
                    .setStyle(ButtonStyle.Danger),
                new ButtonBuilder()
                    .setURL('https://discord.js.org/')
                    .setLabel('Link')
                    .setStyle(ButtonStyle.Link),
            );

        await interaction.reply({ content: 'Here are all the button styles:', components: [row] });
    },
};