const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prune')
        .setDescription('Supprimer jusqu\'à 99 messages.')
        .addIntegerOption(option => option.setName('amount').setDescription('Nombre de messages à supprimer')),
    async execute(interaction) {
        const amount = interaction.options.getInteger('amount');

        if (amount <= 1 || amount > 100) {
            return interaction.reply({ content: 'Vous devez saisir un nombre entre 1 et 99.', ephemeral: true })
        }
        await interaction.channel.bulkDelete(amount, true).catch(error => {
            console.error(error);
            interaction.reply({ content: 'Une erreur s\'est produite lors de la tentative de suppression des messages dans cette chaîne!', ephemeral: true })
        });

        return interaction.reply({ content: `Supprimer avec succès \`${amount}\` messages.`, ephemeral: true })
    },
}
