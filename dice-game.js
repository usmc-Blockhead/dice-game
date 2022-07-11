function rollDice(){
    let goldCoins = 0;
    for (let i = 0; i < 10;i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        console.log (roll)
        alert ('You rolled a ' + roll + '.');

        if (roll === 1) {
            alert ('Game Over!\n\nNo more Rolls!');
            break;
        }

        if (roll < 5) {
            continue;
            alert ('You have won a total of ' + goldCoins + ' gold coins!')
        }

        if ((roll == 4) && (goldCoins != 0)) {
            goldCoins -= 1;
            alert ('You rolled a 4!\n\nYou lose 1 gold coin!');
            continue
        }

        alert ('Congratulations, You win ' + roll + ' gold coins!');
        goldCoins += roll;
        alert ('You have won a total of ' + goldCoins + ' gold coins!')
    }
        alert ('You have won a total of ' + goldCoins + ' gold coins!')
}
