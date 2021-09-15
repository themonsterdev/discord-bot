const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server').
        setDescription('Replies with server info!'),

    async execute(interaction) {
        await interaction.reply(`Nom du serveur: ${interaction.guild.name}\nNombre total de membres: ${interaction.guild.memberCount}`)
    },
}
