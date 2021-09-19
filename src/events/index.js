const { readdirSync } = require('fs')

module.exports = function (client) {
    const eventFiles = readdirSync(__dirname)
        .filter(file => file.endsWith('.js') && !file.endsWith('index.js'))

    for (const file of eventFiles) {
        const event = require(`./${file}`)

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args.concat([client])))
        } else {
            client.on(event.name, (...args) => event.execute(...args.concat([client])))
        }
    }
}
