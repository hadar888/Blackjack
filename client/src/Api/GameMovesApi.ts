import { GetCardResponse } from "../Modals/GameMoveModal";

export const getCard = (isDouble: boolean) : GetCardResponse=> {
    console.log('Send get card from server msg, isDouble: ', isDouble);
    return {
        card: 10,
        isBusted: false,
        isBlackJack: false,
        currentSum: 10,
        isMoreCardsAvailable: true,
    } as GetCardResponse; 
}

export const noMoreCards = () => {
    console.log('Send no more card to server msg');
}