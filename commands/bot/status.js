const { SlashCommandBuilder } = require('discord.js');
const { client } = require('../index.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Sets the status of the bot.')
        .addStringOption(option =>
            option
                .setName('status')
                .setDescription('What the bot\'s status should be.')
                .addChoices(
                    { name: 'Online', value: 'online' },
                    { name: 'Idle', value: 'idle' },
                    { name: 'Do Not Disturb', value: 'dnd' },
                    { name: 'Invisible', value: 'invisible' },
                )),
    async execute(interaction) {
        const status  = interaction.options.getString('status') ?? 'online';
        client.user.setStatus(status);

        await interaction.reply({ content: 'Set the status to ' + status + '!', ephemeral: true });
    },
};