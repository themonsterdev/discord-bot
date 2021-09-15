const { readdirSync } = require('fs')
const { resolve } = require('path')

// Require the necessary discord.js classes
const { Client, Collection, Intents } = require('discord.js')
const { token } = require('../discord.json')

// Create a new client instance
const client = new Client({
    // L' Intents.FLAGS.GUILDS option d'intentions est nécessaire pour que votre client fonctionne correctement.
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
})

// Commands
client.commands = new Collection()
const commandFiles = readdirSync(resolve(__dirname, 'commands')).filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command)
}

// Events
const eventFiles = readdirSync(resolve(__dirname, 'events')).filter(file => file.endsWith('.js'))
for (const file of eventFiles) {
    const event = require(`./events/${file}`)

    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args.concat([client])))
    } else {
        client.on(event.name, (...args) => event.execute(...args.concat([client])))
    }
}

// Login to Discord with your client's token
client.login(token)
