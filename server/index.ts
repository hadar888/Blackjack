import express from 'express';
import bodyParser = require('body-parser');
import { GameManagerController } from "./GameService/GameManager/GameManagerController";
import {InitGameRequestApi} from "./GameService/ClientApi/InitGameRequestApi";
import {InitGameResponse} from "./GameService/Response/InitGameResponse";
import {GameResponse} from "./GameService/Response/GameResponse";
import {ServerStatusResponse} from "./GameService/Utils/Types";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.get('/api/is-alive', (req, res) => {
    res.sendStatus(200);
});


// GameService
app.get('/api/init-game', (req, res) => {
    const playersNum = Number(req.query.playersNum);
    if (isNaN(playersNum)) {
        // TODO- send log
        return new GameResponse(ServerStatusResponse.BAD_REQUEST);
    }

    const initGameRequestApi: InitGameRequestApi = new InitGameRequestApi(playersNum);
    const initGameResponse: InitGameResponse = GameManagerController.executeInitGameRequest(initGameRequestApi);
    res.send(initGameResponse);
});

app.listen(PORT);
console.log('Server is running on port', PORT);  // localhost:3000/*
