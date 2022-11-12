import express from 'express';
import bodyParser = require('body-parser');
import { GameManagerController } from "./GameService/GameManager/GameManagerController";
import {GameResponse} from "./GameService/Response/GameResponse";
import {ServerStatusResponse, MIN_PLAYERS_NUM, MAX_PLAYERS_NUM} from "./GameService/Utils/Types";

const PORT = 3000;
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(bodyParser.json());
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.get('/api/is-alive', (req, res) => {  // #swagger.tags = ['General']
    res.sendStatus(ServerStatusResponse.OK);
});


// GameService
app.get('/api/init-game', (req, res) => {  // #swagger.tags = ['GameService']
    // TODO- add tests
    const initGameResponse: GameResponse = GameManagerController.executeInitGameRequest(req.query.playersNum);
    res.send(initGameResponse);
});

app.listen(PORT);
console.log('Server is running on port', PORT);  // localhost:3000/*
