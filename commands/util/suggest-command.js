const Command = require('../../structures/Command');
const { stripIndents } = require('common-tags');

module.exports = class SuggestCommandCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'suggest-command',
			aliases: ['command-suggestion', 'command-suggest', 'suggest-cmd', 'cmd-suggest'],
			group: 'util',
			memberName: 'suggest-command',
			description: 'Suggests a random command for you to try.',
      details: 'Only the bot owner(s) may use this command.',
			guarded: true,
			ownerOnly: true,
		});
	}

	run(msg) {
		const command = this.client.registry.commands
			.filter(cmd => {
				if (cmd.hidden || cmd.unknown) return false;
				if (!msg.channel.nsfw && cmd.nsfw) return false;
				if (!this.client.isOwner(msg.author) && cmd.ownerOnly) return false;
				if (!msg.guild && cmd.guildOnly) return false;
				return true;
			})
			.random();
		return msg.say(stripIndents`
			Have you tried **${command.name}**?
			_${command.description}_
		`);
	}
};
