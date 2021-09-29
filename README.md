<a href="https://www.daniellvaz.com/" 
style="width: 100%; height: 5rem; display: flex; align-items: center; justify-content: center">
<img src="https://github.com/daniellvaz/Percify/blob/master/logo.png" alt="Percify">
</a>

<div style="display: flex">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
  <img src="https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white">
</div>
<hr>

## Percify is a simple library for generate percentages.

## Installation

Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) to install.

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
