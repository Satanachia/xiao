const Command = require('../../structures/Command');
const { list, firstUpperCase } = require('../../util/Util');
const months = require('../../assets/json/month');
const stones = require('../../assets/json/birthstone');

module.exports = class BirthstoneCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'birthstone',
			group: 'analyze',
			memberName: 'birthstone',
			description: 'Responde con la piedra de nacimiento durante un mes.',
			args: [
				{
					key: 'month',
					prompt: '¿Para qué mes le gustaría obtener la piedra de nacimiento?',
					type: 'month'
				}
			]
		});
	}

	run(msg, { month }) {
		const stone = stones[month - 1];
		const alternate = stone.alternate ? ` De forma alternativa puedes utilizar ${list(stone.alternate, 'o')}.` : '';
		return msg.say(`La piedra de nacimiento para ${firstUpperCase(months[month - 1])} es ${stone.primary}.${alternate}`);
	}
};
