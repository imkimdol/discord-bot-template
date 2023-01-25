const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo_channel')
        .setDescription('Echoes your input in a specified channel.')
        .addStringOption(option =>
            option
                .setName('input')
                .setDescription('The input to echo back')
                .setMaxLength(100)
                .setRequired(true))
        .addChannelOption(option =>
            option
                .setName('channel')
                .setDescription('The channel to echo into')
                .setRequired(true)),
    async execute(interaction) {
        const input   = interaction.options.getString('input');
        const channel = interaction.options.getChannel('channel');
        
        channel.send(input);
        await interaction.reply({ content: 'Echoed the message to the specified channel!', ephemeral: true });
    },
};