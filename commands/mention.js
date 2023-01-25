const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mention')
        .setDescription('Mentions the specified user.')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('The user to mention.')
                .setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('target');

        await interaction.reply(`<@${target.id}>`);
    },
};