const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo_choices')
        .setDescription('Replies with your selection of prespecified responses.')
        .addStringOption(option =>
            option
                .setName('response')
                .setDescription('What the response should be.')
                .addChoices(
                    { name: 'Hello World!', value: 'Hello World!' },
                    { name: 'Goodbye.', value: 'Goodbye.' },
                    { name: 'How are you doing?', value: 'How are you doing?' },
                ))
        .addBooleanOption(option =>
            option
                .setName('ephemeral')
                .setDescription('Whether or not the echo should be ephemeral')),
    async execute(interaction) {
        const response  = interaction.options.getString('response');
        const ephemeral = interaction.options.getBoolean('ephemeral') ?? false;

        await interaction.reply({ content: response, ephemeral: ephemeral });
    },
};