const Command = require('../../structures/Command');
const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');
const { wrapText } = require('../../util/Canvas');
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Noto-Regular.ttf'), { family: 'Noto' });
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Noto-CJK.otf'), { family: 'Noto' });
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Noto-Emoji.ttf'), { family: 'Noto' });
const coord = [[240, 63], [689, 63], [705, 380], [220, 380]];

module.exports = class PlanktonPlanCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'plankton-plan',
			aliases: ['planktons-plan', 'plankton'],
			group: 'image-edit',
			memberName: 'plankton-plan',
			description: 'Sends a Plankton\'s Plan meme with steps of your choice.',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			credit: [
				{
					name: 'Spongebob',
					url: 'https://www.nick.com/shows/spongebob-squarepants'
				},
				{
					name: 'Google Noto Fonts',
					url: 'https://www.google.com/get/noto/'
				}
			],
			args: [
				{
					key: 'step1',
					label: 'step 1',
					prompt: 'What should the first step of Plankton\'s plan be?',
					type: 'string',
					max: 150
				},
				{
					key: 'step2',
					label: 'step 2',
					prompt: 'What should the second step of Plankton\'s plan be?',
					type: 'string',
					max: 150
				},
				{
					key: 'step3',
					label: 'step 3',
					prompt: 'What should the third step of Plankton\'s plan be?',
					type: 'string',
					max: 150
				}
			]
		});
	}

	async run(msg, { step1, step2, step3 }) {
		const steps = [step1, step2, step3, step3];
		const base = await loadImage(path.join(__dirname, '..', '..', 'assets', 'images', 'plankton-plan.png'));
		const canvas = createCanvas(base.width, base.height);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(base, 0, 0);
		ctx.fillStyle = 'black';
		ctx.textBaseline = 'top';
		let i = 0;
		for (const [x, y] of coord) {
			ctx.font = '35px Noto';
			const step = steps[i];
			let fontSize = 35;
			while (ctx.measureText(step).width > 520) {
				fontSize -= 1;
				ctx.font = `${fontSize}px Noto`;
			}
			const lines = await wrapText(ctx, step, 160);
			ctx.fillText(lines.join('\n'), x, y);
			i++;
		}
		return msg.say({ files: [{ attachment: canvas.toBuffer(), name: 'plankton-plan.png' }] });
	}
};