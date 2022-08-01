# Library System

## Installation

###FrontEnd

```bash
cd FrontEnd
npm install or yarn install
npm start or yarn start
```
The application will run on port 3000


###BackEnd

```bash
cd BackEnd
npm install or yarn
npm run dev or yarn dev
```
The server will run on port 3001


On BackEnd/src/database.js
```js
  const connection = await mysql.createConnection(
    "mysql://root:password@localhost:3306/library_system"
  );
```

root -> user
password -> database's password
localhost -> where it is hosted
3306 -> port
library_system -> databases's name
