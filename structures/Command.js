const { Command } = require('discord.js-commando');

module.exports = class XiaoCommand extends Command {
	constructor(client, info) {
		if (!info.argsPromptLimit) info.argsPromptLimit = 1;
		super(client, info);

		this.argsSingleQuotes = info.argsSingleQuotes || false;
		this.throttling = info.unknown ? null : info.throttling || { usages: 1, duration: 2 };
		this.uses = 0;
		this.lastRun = null;
		this.credit = info.credit || [];
		this.credit.push({
			name: '0DarkAngel0',
			url: 'https://github.com/0DarkAngel0/xiao',
			reason: 'Code'
		});
	}
};
