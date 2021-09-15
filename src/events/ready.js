const { MessageEmbed } = require('discord.js')

const embed = new MessageEmbed()
    .setTitle('Some Title')
    .setColor('#0099ff')

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`)

        const channel = client.channels.cache.get('741889159395934218')

        try {
            const webhooks = await channel.fetchWebhooks()
            const webhook = webhooks.first()

            await webhook.send({
                content: 'Webhook test',
                avatarURL: 'https://i.imgur.com/AfFp7pu.png',
                embeds: [embed],
            })
        } catch (error) {
            console.error('Error trying to send a message: ', error)
        }
    },
}
