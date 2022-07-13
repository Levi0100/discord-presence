# Installation
```
npm i discord-rpc
```
## Example usage
~~~javascript
import {Client} from 'discord-rpc'
const client = new Client({transport: 'ipc' /*or 'websocket'*/});
client.on('ready', () => {
    console.log('Logged'.green);
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: 'Hello, world!',
            state: 'OOOOMAGAWD'
        }
    });
});
client.login({clientId: '837826840004395048'});
~~~
### Run
```
node .
node index.js
```
# Self hosting
- Install Node.js (https://nodejs.org/)
- Delete the file `.gitignore`
- Run that commands in your terminal:
```
npm i
```
```
node .
```