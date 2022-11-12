import { InitGameRequest } from "../Modals/InitGameRequest";
import { GameManagerProcessor } from "./GameManagerProcessor";
import {MAX_PLAYERS_NUM, MIN_PLAYERS_NUM, ServerStatusResponse} from "../Utils/Types";
import {GameResponse} from "../Response/GameResponse";

export class GameManagerController {
    static executeInitGameRequest(playersNum: any): GameResponse {
        const playersNumber = Number(playersNum);
        if (isNaN(playersNumber) || playersNumber < MIN_PLAYERS_NUM || playersNumber > MAX_PLAYERS_NUM) {
            // TODO- send log
            return new GameResponse(ServerStatusResponse.BAD_REQUEST);
        }

        const initGameRequest: InitGameRequest = new InitGameRequest(playersNumber);
        return GameManagerProcessor.executeInitGameRequest(initGameRequest);
    }
}
