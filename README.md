# chatapp
Node Server is in /Server/index.js, just run $node index.js 
For CORS, the port of Server is different with that of page resources.So a simple cors setting is added in Server,where orgin is set as Local postion of App,for example: 
  cors: {
    origin: "http://localhost:8081",
    methods: ["GET", "POST"]
  }
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
