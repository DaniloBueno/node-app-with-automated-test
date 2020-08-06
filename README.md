# Node App With Automated Test

A simple Nodejs HTTP server with an automated test

### Requirements
Nodejs version 8+

### Installing

```
npm install
npm install mocha --global
npm install forever --global
```

## Running

HTTP server:
```
./run.sh start
```

Automated test:
```
npm test
```

## Considerations
* Access HTTP server by http://localhost:8080
* For more server options, run:
```
./run.sh help
```

## License

This project is licensed under the MIT License.
