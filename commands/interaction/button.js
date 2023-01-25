const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Replies with a message that has a button.')
        .addBooleanOption(option =>
            option
                .setName('disabled')
                .setDescription('Whether the button should be disabled or not.')),
    async execute(interaction) {
        const disabled = interaction.options.getBoolean('disabled') ?? false;

        // Set up button
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('primary')
                    .setLabel('Click me!')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji('😄')
                    .setDisabled(disabled),
            );
        const rowDisabled = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('primary')
                    .setLabel('Click me!')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji('😄')
                    .setDisabled(true),
            );

        const message = await interaction.reply({ content: 'I think you should.', components: [row] });
        console.log(typeof message);

        // Set up collector
        const collector = message.createMessageComponentCollector({ componentType: ComponentType.Button, time: 15000 });
        collector.on('collect', async i => {
            if (i.user.id === interaction.user.id) {
                await i.update({ content: 'Clicked!', components: [rowDisabled] });
                i.followUp(`<@${i.user.id}> clicked on the ${i.customId} button.`);
            } else {
                i.reply({ content: 'These buttons aren\'t for you!', ephemeral: true });
            }
        });
        collector.on('end', collected => {
            console.log(`Collected ${collected.size} interactions.`);
        });
    },
};