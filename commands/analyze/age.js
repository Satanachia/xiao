const Command = require('../../structures/Command');

module.exports = class AgeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'age',
			group: 'analyze',
			memberName: 'age',
			description: 'Responde con la edad de alguien nacido en un año determinado.',
			args: [
				{
					key: 'year',
					prompt: '¿Para qué año le gustaría obtener la edad?',
					type: 'integer',
					min: 1
				}
			]
		});
	}

	run(msg, { year }) {
		const currentYear = new Date().getFullYear();
		const age = currentYear - year;
		if (age < 0) return msg.say(`Alguien nacido en ${year} nacera en ${Math.abs (age)} años.`);
		return msg.say(`Alguien nacido en ${year} tendría ${age} años.`);
	}
};
