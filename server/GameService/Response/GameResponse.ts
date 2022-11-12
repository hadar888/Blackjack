import {ServerStatusResponse} from "../Utils/Types";

export class GameResponse {
    status: ServerStatusResponse

    constructor(status: ServerStatusResponse) {
        this.status = status;
    }
}
