import { SlashCommandBuilder } from '@discord.js';

const data = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('replies with pong! ')

async function execute(interaction) {
	await interaction.reply('Pong!');
}