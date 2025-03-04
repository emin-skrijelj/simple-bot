var randomnum;
module.exports = {
    name: 'play',
    aliases: [],
    description: 'No Description',
    cooldown: 2,
    guildOnly: true,
    args: false,
    usage:"<number>",
    // eslint-disable-next-line no-unused-vars
    execute(msg, args) {
        if(args[0] === 'number'){
            randomnum = Math.floor(Math.random()*15)
            return msg.reply("New number guessing game started\n Good Luck!")
        }

        if(randomnum){
            if(randomnum !== parseInt(args[0])){
                return msg.reply('That\'s not the right number, try again!')
            }
            
            randomnum = undefined
            return msg.reply('You\'ve guessed the number!')
        }

        msg.reply('Use command \`-play *game name*\` to play the games!')
    },
};
