const { readdirSync } = require('fs')
const { Collection } = require('discord.js')

module.exports = function (client) {
    client.commands = new Collection()

    const commandFiles = readdirSync(__dirname)
        .filter(file => file.endsWith('.js') && !file.endsWith('index.js'))

    for (const file of commandFiles) {
        const command = require(`./${file}`)

        // Set a new item in the Collection
        // With the key as the command name and the value as the exported module
        client.commands.set(command.data.name, command)
    }
}
