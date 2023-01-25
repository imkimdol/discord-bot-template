const { SlashCommandBuilder } = require('discord.js');
const { client } = require('../../index.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo_dm')
        .setDescription('Echoes your input in a specified user\'s direct messages.')
        .addStringOption(option =>
            option
                .setName('input')
                .setDescription('The input to echo back.')
                .setMaxLength(100)
                .setRequired(true))
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user to direct message to.')
                .setRequired(true)),
    async execute(interaction) {
        const input = interaction.options.getString('input');
        const user = interaction.options.getUser('user');
        
        client.users.send(user.id, input);
        await interaction.reply({ content: 'Echoed the message to the specified channel!', ephemeral: true });
    },
};