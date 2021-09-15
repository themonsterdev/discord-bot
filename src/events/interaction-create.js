module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`)

        if (!interaction.isCommand()) return

        const command = client.commands.get(interaction.commandName)
        if (!command) return

        try {
            await command.execute(interaction)
        } catch (error) {
            console.error(error)
            await interaction.reply({ content: "Une erreur c'est produite lors de l'exécution de cette commande!", ephemeral: true })
        }
    },
}
