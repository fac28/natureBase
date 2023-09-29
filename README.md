# natureBase readMe

natureBase is a web application that allows users to submit and view pictures of nature taken around London. It is built using Node.js, SQLite, and the Express framework. It is deployed [here](https://nature-base.fly.dev/) through fly.

## Installation Instructions

To run the application, clone the repository and install the dependencies:

```bash
git clone https://github.com/fac28/natureBase.git

cd natureBase

npm install
```
Then, seed the server:

```bash
npm run seed
```

Then, start the server:

```bash
npm run dev
```

The application will be running on port 3000 by default. 

After cloning the repo you can run the "npm run dev" command. This way you can visit it in your browser at http://localhost:3000.

The SQL database can be seeded with some data buy running "npm run seed".

## SQL Table Post Schema
<img width="471" alt="Screenshot 2023-09-27 at 15 15 29" src="https://github.com/fac28/natureBase/assets/59057287/0c97c1b4-6325-4c61-acac-076810b59286">


## Testing

To run test scripts:

```bash
npm run test
```

### Credits

The project was created by <a href="https://github.com/sgroi-l">Laurie Sgroi</a>, <a href="https://github.com/cazanelena">Elena Cazan</a>, <a href="https://github.com/nichgalzin">Nich Galzin</a> & <a href="https://github.com/GeorgeKlemperer">George Klemperer</a>.
