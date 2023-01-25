const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option
                .setName('input')
                .setDescription('The input to echo back')
                .setMaxLength(100)
                .setRequired(true))
        .addChannelOption(option =>
            option
                .setName('channel')
                .setDescription('The channel to echo into'))
        .addBooleanOption(option =>
            option
                .setName('ephemeral')
                .setDescription('Whether or not the echo should be ephemeral')),
    async execute(interaction) {
        const input     = interaction.options.getString('input');
        const ephemeral = interaction.options.getBoolean('ephemeral') ?? false;
        // TODO figure out how to send messages in different channel

        await interaction.reply({ content: input, ephemeral: ephemeral });
    },
};