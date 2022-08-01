# Library System

## Installation

### FrontEnd

1. Open the directory
```bash
cd FrontEnd
```
2. Adding dependencies
```bash
npm install or yarn install
```
3. Starting application
```bash
npm start or yarn start
```
The application will run on port 3000


### BackEnd

1. Open the directory
```bash
cd BackEnd
```

2. Adding dependencies
```bash
npm install or yarn
```

3. Starting application
```bash
npm run dev or yarn dev
```
The server will run on port 3001


On BackEnd/src/database.js
```js
  const connection = await mysql.createConnection(
    "mysql://root:password@localhost:3306/library_system"
  );
```

- root -> user
- password -> database's password
- localhost -> where it is hosted
- 3306 -> port
- library_system -> databases's name
