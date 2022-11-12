import {MAX_GAME_ID} from "./Types";

export const generateGameId = () => {
    return Math.floor(Math.random() * MAX_GAME_ID);
}
