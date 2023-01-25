const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('request_input')
        .setDescription('A command that requests more input.'),
    async execute(interaction) {
        interaction.reply('Please enter more input.').then(() => {
            const filter = m => interaction.user.id === m.author.id;
        
            interaction.channel.awaitMessages({ filter, time: 60000, max: 1, errors: ['time'] })
                .then(messages => {
                    interaction.followUp(`You've entered: ${messages.first().content}`);
                })
                .catch(() => {
                    interaction.followUp('You did not enter any input!');
                });
        });
    },
};