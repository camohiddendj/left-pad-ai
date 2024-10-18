require('dotenv').config(); // To use the API key from a .env file
const leftPadAi = require('./index.js');

async function runTest() {
  try {
    const result = await leftPadAi("hello", 10, "*");
    console.log('Test passed:', result === '*****hello');
  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

runTest();
