module.exports = {
    name: 'guildMemberAdd',

    execute(client) {
        client.createDM().then(channel => {
            return channel.send('Bienvenue sur le serveur ' + client.displayName + ' tu est actuellement un nouveau gibier')
        }).catch(console.error)
    },
}
