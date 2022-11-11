export interface GetCardResponse {
    card: number;
    isBusted: boolean;
    isBlackJack: boolean;
    currentSum: number;
    isMoreCardsAvailable: boolean;
}