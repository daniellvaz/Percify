[logo](https://github.com/daniellvaz/Percify/blob/master/logo.png)

Percify is a simple library for generate percentages.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm install percify
```

or

```bash
yarn add percify
```

## Usage

```javascript
const percentage = require("@percify/percentage");

/**
 * returns "Percentage: 10%"
 * params type number
 */
console.log("Percentage: " + percentage(150, 1500) + "%");

/**
 * returns "Percentage: 10%"
 * params type string
 */
console.log("Percentage: " + percentage("150", "1500") + "%");
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/) 💙 [Daniel Murilo Vaz](https://www.daniellvaz.com.br)
