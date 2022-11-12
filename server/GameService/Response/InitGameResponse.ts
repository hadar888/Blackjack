import {GameResponse} from "./GameResponse";
import {ServerStatusResponse} from "../Utils/Types";

export class InitGameResponse extends GameResponse {
    gameId: Number;

    constructor(gameId: number, status: ServerStatusResponse) {
        super(status);
        this.gameId = gameId;
    }
}
