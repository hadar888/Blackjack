import { InitGameRequestApi } from "../ClientApi/InitGameRequestApi";
import { InitGameRequest } from "../Modals/InitGameRequest";
import { InitGameResponse } from "../Response/InitGameResponse";
import { GameManagerProcessor } from "./GameManagerProcessor";

export class GameManagerController {
    static executeInitGameRequest(initGameRequestApi: InitGameRequestApi): InitGameResponse {
        const initGameRequest: InitGameRequest = new InitGameRequest(initGameRequestApi);
        return GameManagerProcessor.executeInitGameRequest(initGameRequest);
    }
}
