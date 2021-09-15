const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with user info!'),

    async execute(interaction) {
        await interaction.reply(`Votre tag: ${interaction.user.tag}\nVotre identifiant: ${interaction.user.id}`)
    },
}
