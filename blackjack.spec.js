describe('Test for BlackJack Game', () => {
    it('Test Function: dealerShouldDraw: 10, 9', () =>{
        const hand = [
            {displayVal: 'Ten', val: 10, suit: 'Diamond'},
            {displayVal: 'Nine', val: 9, suit: 'Diamond'}
        ]
        // Get the Result from calling the Function
        const result = dealerShouldDraw(hand);
        // Dealer Should Not Draw
        expect(result).toBeFalsy();
    })

    
    it('Test Function: dealerShouldDraw: Ace, 6', () =>{
        const hand = [
            {displayVal: 'Ace', val: 11, suit: 'Diamond'},
            {displayVal: 'Six', val: 6, suit: 'Diamond'}
        ]
        // Get the Result from calling the Function
        const result = dealerShouldDraw(hand);
        // Dealer Should Not Draw
        expect(result).toBeTruthy();
    })

    it('Test Function: dealerShouldDraw: 10, 6, Ace', () =>{
        const hand = [
            {displayVal: 'Ace', val: 11, suit: 'Diamond'},
            {displayVal: 'Six', val: 6, suit: 'Diamond'},
            {displayVal: 'Ten', val: 10, suit: 'Diamond'}
        ]
        // Get the Result from calling the Function
        const result = dealerShouldDraw(hand);
        // Dealer Should Not Draw
        expect(result).toBeFalsy();
    })


    it('Test Function: dealerShouldDraw: 2, 4, 2, 5', () =>{
        const hand = [
            {displayVal: 'Two', val: 2, suit: 'Diamond'},
            {displayVal: 'Four', val: 4, suit: 'Diamond'},
            {displayVal: 'Two', val: 2, suit: 'Hearts'},
            {displayVal: 'Five', val: 5, suit: 'Diamond'}
        ]
        // Get the Result from calling the Function
        const result = dealerShouldDraw(hand);
        // Dealer Should Not Draw
        expect(result).toBeTruthy();
    })
});
