const RoleplayCommand = require('../../structures/commands/Roleplay');
const { BLUSH_ALBUM_ID } = process.env;

module.exports = class BlushCommand extends RoleplayCommand {
	constructor(client) {
		super(client, {
			name: 'blush',
			group: 'roleplay',
			memberName: 'break-up',
			description: 'Blushes at a user.',
			clientPermissions: ['ATTACH_FILES'],
			albumID: BLUSH_ALBUM_ID,
			args: [
				{
					key: 'user',
					prompt: 'What user do you want to roleplay with?',
					type: 'user'
				}
			]
		});
	}

	generateText(msg, user) {
		return `_**${msg.author.username}** blushes at **${user.username}**._`;
	}
};