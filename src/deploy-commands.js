const { readdirSync } = require('fs')
const { resolve } = require('path')

const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { clientId, guildId, token } = require('../discord.json')

const commands = []
const commandFiles = readdirSync(resolve(__dirname, 'commands')).filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    commands.push(command.data.toJSON())
}

const rest = new REST({
    version: '9'
})

async function main() {
    try {
        rest.setToken(token)

        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        )

        console.log('Successfully registered application commands.')
    } catch (error) {
        console.error(error)
    }
}

main()
