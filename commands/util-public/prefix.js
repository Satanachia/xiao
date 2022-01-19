const Command = require('../../structures/Command');
const { stripIndents } = require('common-tags');

module.exports = class PrefixCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'prefix',
			group: 'util-public',
			memberName: 'prefix',
			description: 'Responds with the bot\'s command prefix.',
			guarded: true
		});
	}

	run(msg) {
		const prefix = msg.guild ? msg.guild.commandPrefix : this.client.commandPrefix;
		return msg.reply(stripIndents`
			${prefix ? `Mi prefix es \`${prefix}\`.` : 'Este no es mi prefix :('}
			Para utilizar mis comandos ${msg.anyUsage('<command>')}.
		`);
	}
};
