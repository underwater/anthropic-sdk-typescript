#!/usr/bin/env -S npm run tsn -T
import { config } from 'dotenv';
config();

import Anthropic from '@anthropic-ai/sdk';
console.log('Anthropic', process.env['ANTHROPIC_API_KEY']);
const client = new Anthropic({ apiKey: process.env['ANTHROPIC_API_KEY'] }); // gets API Key from environment variable ANTHROPIC_API_KEY

async function main() {
  const result = await client.messages.create({
    messages: [
      {
        role: 'user',
        content: 'Hey Claude!?',
      },
    ],
    model: 'claude-3-opus-20240229',
    max_tokens: 1024,
  });
  console.dir(result);
}

main();
