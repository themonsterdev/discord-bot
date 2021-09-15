function getUserFromMention(client, mention) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }

        return client.users.cache.get(mention);
    }
}

module.exports = {
    name: 'messageCreate',
    async execute(interaction, client) {
        const mention = getUserFromMention(client, interaction.content)

        if (mention && mention.discriminator === '5720')
            interaction.reply('google est ton amis!')
    },
}
