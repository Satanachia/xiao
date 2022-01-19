const Command = require('../../structures/Command');
const signs = require('../../assets/json/chinese-zodiac');

module.exports = class ChineseZodiacCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'chinese-zodiac',
			aliases: ['chinese-zodiac-sign', 'c-zodiac', 'c-zodiac-sign'],
			group: 'analyze',
			memberName: 'chinese-zodiac',
			description: 'Responde con el signo del zodíaco chino para el año dado.',
			args: [
				{
					key: 'year',
					prompt: '¿Para qué año le gustaría obtener el signo del zodíaco chino?',
					type: 'integer',
					min: 1
				}
			]
		});
	}

	run(msg, { year }) {
		return msg.say(`El signo del zodíaco chino para ${year} es ${signs [year % signs.length]}.`);
	}
};
