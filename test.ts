import { config } from 'dotenv';
import { leftPadAi } from './index.js';  // Assuming index.ts is compiled to index.js

config();  // Load environment variables from .env

async function runTest() {
  try {
    const result = await leftPadAi("hello", 10, "*");
    console.log('Test passed:', result === '*****hello');
  } catch (error: any) {
    console.error('Test failed:', error.message);
  }
}

runTest();
