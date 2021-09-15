const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Sélectionnez un membre et bannissez-le (mais pas vraiment).')
        .addUserOption(option => option.setName('target').setDescription('Le membre à était banni')),
    async execute(interaction) {
        const user = interaction.options.getUser('target')
        return interaction.reply({ content: `Tu voulais bannir: ${user.username}`, ephemeral: true })
    },
}
