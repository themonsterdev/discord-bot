const { SlashCommandBuilder } = require('@discordjs/builders')

const slashCommandBuilder = new SlashCommandBuilder()
slashCommandBuilder.setName('kick')
slashCommandBuilder.setDescription('Sélectionnez un membre et bannissez-le (mais pas vraiment).')
slashCommandBuilder.addUserOption(option => option.setName('target').setDescription('Le membre à était banni'))

module.exports = {
    data: slashCommandBuilder,

    async execute(interaction) {
        const member = interaction.options.getUser('target')

        if (member !== null) {
            interaction.reply({ content: `Tu voulais bannir: ${member.username}`, ephemeral: true })
        }
    },
}
