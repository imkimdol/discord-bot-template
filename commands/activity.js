const { SlashCommandBuilder, ActivityType } = require('discord.js');
const { client } = require('../index.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('actvity')
        .setDescription('Sets the bot\'s visible activity.')
        .addStringOption(option =>
            option
                .setName('activity')
                .setDescription('What the visible activity should be.')
                .setMaxLength(100)
                .setRequired(true))
        .addIntegerOption(option =>
            option
                .setName('type')
                .setDescription('What the bot\'s activity type should be.')
                .addChoices(
                    { name: 'Playing', value: ActivityType.Playing },
                    { name: 'Watching', value: ActivityType.Watching },
                    { name: 'Streaming', value: ActivityType.Streaming },
                    { name: 'Listening to', value: ActivityType.Listening },
                    { name: 'Competing in', value: ActivityType.Competing },
                )),
    async execute(interaction) {
        const type = interaction.options.getInteger('type') ?? 'Playing';
        const activity = interaction.options.getString('activity');

        client.user.setActivity(activity, { type: type });
        await interaction.reply({ content: 'Set the activity to ' + activity + '!', ephemeral: true });
    },
};