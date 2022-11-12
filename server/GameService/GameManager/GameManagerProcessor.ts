import { InitGameRequest } from "../Modals/InitGameRequest";
import { InitGameResponse } from "../Response/InitGameResponse";
import { ServerStatusResponse } from "../Utils/Types";
import {generateGameId} from "../Utils/Utils";

export class GameManagerProcessor {
    static executeInitGameRequest(initGameRequestApi: InitGameRequest): InitGameResponse {
        const initGameRequest = new InitGameRequest(initGameRequestApi);
        // TODO- handle initGameRequest in DB
        return new InitGameResponse(generateGameId(), ServerStatusResponse.OK);
    }
}
