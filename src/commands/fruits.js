const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fruits')
        .setDescription('description de fruits'),

    async execute(interaction) {
        const message = await interaction.reply({ content: 'Reacting with fruits!', fetchReply: true })

        try {
            await message.react('🍎')
            await message.react('🍊')
            await message.react('🍇')
        } catch (error) {
            console.error('One of the emojis failed to react:', error)
        }
    },
}
