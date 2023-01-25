const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('request_input')
        .setDescription('A command that requests more input.'),
    async execute(interaction) {
        // TODO find out why this command is bugged
        interaction.reply('Please enter more input.').then(() => {
            const filter = m => interaction.user.id === m.author.id;
            const collector = interaction.channel.createMessageCollector({ filter, time: 15000 });
        
            collector.on('collect', m => {
                interaction.followUp(`You've entered: ${m.content}`);
            });
        });
    },
};