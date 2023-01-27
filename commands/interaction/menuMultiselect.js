const { SlashCommandBuilder, ActionRowBuilder, Events, StringSelectMenuBuilder, ComponentType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu_multiselect')
        .setDescription('Replies with a message that has a multi-select menu.'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.setMinValues(2)
					.setMaxValues(3)
					.addOptions([
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
						{
							label: 'I am also an option',
							description: 'This is a description as well',
							value: 'third_option',
						},
					]),
			);

		const message = await interaction.reply({ content: 'Here is a multi-select menu:', components: [row] });

        // Set up collector
        const collector = message.createMessageComponentCollector({ componentType: ComponentType.StringSelect, time: 15000 });
        collector.on('collect', async i => {
            if (i.user.id === interaction.user.id) {
				const selected = i.values.join(', ');
                await i.update(`The user selected ${selected}!`);
            }
        });
    },
};