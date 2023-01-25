const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('emoji_button')
        .setDescription('Replies with a message where the 👍 reaction triggers actions.'),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'React to this message with a 👍!', fetchReply: true });
        await message.react('👍');

        const filter = (reaction) => {
            return reaction.emoji.name === '👍';
        };
        
        const collector = message.createReactionCollector({ filter, time: 15000 });
        
        collector.on('collect', (reaction, user) => {
            console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
        });
    },
};