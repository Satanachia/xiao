const Command = require('../../structures/Command');
const { MersenneTwister19937, integer } = require('random-js');
const { under100, between, over300 } = require('../../assets/json/psycho-pass');

module.exports = class PsychoPassCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'psycho-pass',
			aliases: ['crime-coefficient'],
			group: 'analyze',
			memberName: 'psycho-pass',
			description: 'Determines your Crime Coefficient.',
			credit: [
				{
					name: 'PSYCHO-PASS',
					url: 'http://psycho-pass.com/'
				}
			],
			args: [
				{
					key: 'user',
					prompt: 'What user do you want to determine the Crime Coefficient of?',
					type: 'user',
					default: msg => msg.author
				}
			]
		});
	}

	run(msg, { user }) {
		if (user.id === this.client.user.id) return msg.reply('Me? I-I\'m not dangerous, I promise!');
		const random = MersenneTwister19937.seed(user.id);
		const coefficient = integer(0, 500)(random);
		let res;
		if (coefficient < 100) res = under100;
		else if (coefficient > 300) res = over300;
		else res = between;
		return msg.reply(
			`${msg.author.id === user.id ? 'Your' : `Suspect ${user.username}'s`} Crime Coefficient is ${coefficient}. ${res}`
		);
	}
};
