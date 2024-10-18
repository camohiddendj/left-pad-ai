# left-pad-ai

`left-pad-ai` is a utility function that utilizes the OpenAI API to left-pad a given string to a desired length, using a specified padding character. Sometimes you just want to add some of that AI magic to any project, and `left-pad-ai` does exactly that in style.

## Why Use AI for Left Padding?

You might be thinking: "Why use AI for something as simple as left-padding a string?" The answer is simple—because we can! Sometimes the journey is more fun than the destination, and `left-pad-ai` brings a bit of that OpenAI magic to even the most mundane of tasks. Besides, who doesn't love the idea of AI-generated padding?

## Features

- Left-pad any given string to a desired length.
- Use any character for padding.
- Implements OpenAI's GPT-3.5 model to determine the padded output.
- Brings the power of AI into even the simplest of tasks—because why not?

## Prerequisites

- Node.js (version 14 or above recommended)
- An OpenAI API key (required for using OpenAI services)

## Installation

To install the `left-pad-ai` module, run the following command:

```sh
npm install left-pad-ai
```

## Usage

Here's an example of how to use `left-pad-ai` in your project:

```javascript
require('dotenv').config();
const leftPadAi = require('left-pad-ai');

(async () => {
  try {
    const paddedString = await leftPadAi('hello', 10, '*');
    console.log(paddedString); // Output: "*****hello"
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
})();
```

### Parameters

- `inputString` (string): The original string that needs to be padded.
- `length` (number): The desired length of the final padded string.
- `padChar` (string): The character used for padding. This should be a single character.

### Environment Variables

The module requires an OpenAI API key to be set as an environment variable:

- `OPENAI_API_KEY`: Your OpenAI API key.

Ensure you set this environment variable before running your script. You can do this in a `.env` file as shown below:

```
OPENAI_API_KEY=your_openai_api_key_here
```

## Example Output

Given the following:

- `inputString = 'hello'`
- `length = 10`
- `padChar = '*'`

The resulting output will be:

```
*****hello
```

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
