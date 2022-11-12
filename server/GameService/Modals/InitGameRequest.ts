import { InitGameRequestApi } from "../ClientApi/InitGameRequestApi";

export class InitGameRequest {
    playersNum;

    constructor(initGameRequestApi: InitGameRequestApi) {
        this.playersNum = initGameRequestApi.playersNum;
    }
}
