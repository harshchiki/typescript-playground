# typescript-playground
## Run the project
> npm run dev

## Debug the project
> npm run debug




------
1. Initialize a package.json (Optional, but recommended)
> npm init -y
Initializes package.json.

2. Install typescript
> npm install typescript --save-dev
Installs typescript.

3. Initialize a tsconfig.json file
> npx tsc --init
Initializes tsconfig.json. The tsconfig.json file is the configuration file for TypeScript projects. 
It allows you to define how TypeScript should compile your code, including output settings, strictness rules, and module resolution.
Key Benefits of tsconfig.json
✅ Centralized Configuration → No need to pass CLI flags every time
✅ Strict Type Checking → Helps catch potential errors early
✅ Control Compilation Output → Choose target JS version, output directory, etc.
✅ Enable Features → Control module resolution, decorators, JSX, etc.
✅ Project-Wide Settings → Applies to all .ts files in the project

Important Options in tsconfig.json
Option:	Purpose
"target": "ES6"	Compiles to ES6 JavaScript (can be "ES5", "ESNext", etc.).
"module": "CommonJS"	Uses CommonJS modules (default for Node.js).
"outDir": "./dist"	Compiled JS files go inside dist/ folder.
"rootDir": "./src"	TypeScript files are inside src/.
"strict": true	Enables strict type checking.
"esModuleInterop": true	Allows default imports from CommonJS modules.
"skipLibCheck": true	Skips checking types in node_modules (improves build time).
"forceConsistentCasingInFileNames": true	Prevents case-sensitivity issues in imports.
"include": ["src"]	Only compiles files inside src/.
"exclude": ["node_modules"]	Ignores node_modules/ from compilation.

4. Install ts-node
> npm install ts-node --save-dev
Installs ts-node. ts-node is a TypeScript execution engine that allows you to run TypeScript files directly using Node.js.
NB: --save-dev or -D is used when installing packages that are only needed for development purposes, not for production. They are saved in your package.json under "devDependencies" rather than "dependencies".

5. Install @types/node
> npm install @types/node --save-dev
Installs @types/node. @types/node is a package that provides TypeScript type definitions for Node.js. It provides type information that helps TypeScript understand and provide intellisense for built-in Node.js APIs and modules.
Important for:
TypeSafety for Node.js APIs
```
import * as fs from 'fs';
import * as http from 'http';

// You get proper typing for Node.js APIs
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});
```
Global Types
```
// process, Buffer, etc. are globally available with proper types
process.env.NODE_ENV; // TypeScript knows this is a string
Buffer.from('hello'); // TypeScript knows Buffer methods and types
```
Module Declaration
```
// TypeScript understands Node.js module system
import { join } from 'path';
import { EventEmitter } from 'events';
```

6. Install nodemon
> npm install nodemon --save-dev    
Installs nodemon. Nodemon is a tool that helps you develop Node.js applications by automatically restarting the server on file changes.

7. Install ts-node-dev
> npm install ts-node-dev --save-dev
Installs ts-node-dev. Ts-node-dev is a TypeScript execution engine that allows you to run TypeScript files directly using Node.js. It is a development tool that monitors your TypeScript files and automatically recompiles them when changes are detected.


-----


# Local Debugging
1. Update package.json Scripts
Modify your package.json "scripts" section to ensure you're using ts-node-dev with debugging enabled:

--> "--inspect" enables debugging in VS Code
--> "--respawn" restarts automatically when files change
--> "--transpile-only" speeds up execution by skipping full type checking

```
"scripts": {
  "start": "node dist/index.js",
  "build": "tsc",
  "dev": "ts-node-dev --respawn --inspect --transpile-only src/index.ts"
}
--inspect → Enables debugging in VS Code
--respawn → Restarts automatically when files change
--transpile-only → Speeds up execution by skipping full type checking
```

2. Create a launch.json File in VS Code
Open VS Code
Go to Run & Debug (Ctrl+Shift+D)
Click "create a launch.json file"
Select "Node.js"
Replace the generated launch.json with the following:
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug TypeScript",
      "type": "node",
      "request": "attach",
      "port": 9229,
      "restart": true,
      "sourceMaps": true,
      "protocol": "inspector",
      "timeout": 10000,
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```
"request": "attach" → Attaches to a running process
"port": 9229 → Must match the debug port from --inspect
"sourceMaps": true → Enables debugging with TypeScript source maps
"restart": true → Automatically reconnects if the process restarts
"timeout": 10000 → Gives enough time to attach

3. Run
> npm run dev

## Bonus: Auto Restart Debugging with nodemon
If you want auto-restart debugging, modify package.json:


Edit package.json
```
"scripts": {
  "debug": "nodemon --inspect-brk --ext ts --exec ts-node src/index.ts"
}
```
Then run:

> npm run debug

This will:  
- Start TypeScript debugging
- Restart on file changes




-----

🚀 TL;DR: Why Use TypeScript?
| Feature               | JavaScript | TypeScript         |
| --------------------- | ---------- | ------------------ |
| Type Safety           | ❌ No       | ✅ Yes              |
| Object Validation     | ❌ No       | ✅ Yes (Interfaces) |
| Optional Params       | ❌ No       | ✅ Yes (?)          |
| Enum Support          | ❌ No       | ✅ Yes              |
| Function Overloading  | ❌ No       | ✅ Yes              |
| Generics              | ❌ No       | ✅ Yes              |
| Compile-Time Checking | ❌ No       | ✅ Yes              |