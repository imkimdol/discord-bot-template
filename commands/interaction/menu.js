const { SlashCommandBuilder, ActionRowBuilder, Events, StringSelectMenuBuilder, ComponentType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Replies with a message that has a menu.'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					),
			);

        const message = await interaction.reply({ content: 'Here is a menu:', components: [row] });

        // Set up collector
        const collector = message.createMessageComponentCollector({ componentType: ComponentType.StringSelect, time: 15000 });
        collector.on('collect', async i => {
            if (i.user.id === interaction.user.id) {
                await i.update(`<@${i.user.id}> clicked on the ${i.values[0]} option.`);
            }
        });
    },
};