// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js')

// Place your client and guild ids here
const { token } = require('../discord.json')

const Commands = require('./commands')
const Events = require('./events')

const intents = new Intents([
    // L' Intents.FLAGS.GUILDS option d'intentions est nécessaire pour que votre client fonctionne correctement.
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    // Si vous avez besoin que votre bot reçoive des messages ( MESSAGE_CREATE - "messageCreate"dans discord.js)
    // - vous avez besoin de l' GUILD_MESSAGES intention.
    Intents.FLAGS.GUILD_MESSAGES,
    // Si vous souhaitez que votre bot publie des messages de bienvenue pour les nouveaux membres ( GUILD_MEMBER_ADD - "guildMemberAdd" dans discord.js),
    // - vous avez besoin de l' GUILD_MEMBERS intention, etc.
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_PRESENCES,
])

// Create a new client instance
const client = new Client({ intents })

// Commands
Commands(client)

// Events
Events(client)

// Login to Discord with your client's token
client.login(token)
