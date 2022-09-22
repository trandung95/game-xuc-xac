const stateDefault = {
    dice: [
        { value: 1, url: "./gameXucXac/1.png" },
        { value: 2, url: "./gameXucXac/2.png" },
        { value: 3, url: "./gameXucXac/3.png" },
    ],
    playerPick: true,
    result: {
        win: 0,
        totalGame: 0,
        lose: null
    }
};
//true = tài, false = xỉu
export const GameXucXac = (state = stateDefault, action) => {
    switch (action.type) {
        case "START_GAME": {
            let newDice = [];
            let sumDice = 0;
            for (let i = 1; i <= 3; i++) {
                let RNG = Math.floor(Math.random() * 6) + 1;
                console.log("i=", i, "RNG", RNG);
                newDice.push({ value: RNG, url: `./gameXucXac/${RNG}.png` })
                sumDice = sumDice + RNG;
            }
            state.dice = newDice;
            if ((state.playerPick === true && sumDice >= 11) || (state.playerPick === false && sumDice < 11)) {
                state.result.win = state.result.win + 1;
                state.result.lose = false
            } else {
                state.result.lose = true
            }
            state.result.totalGame = state.result.totalGame + 1;
            console.log("state.dice", state.dice);
            console.log("state.playerPick", state.playerPick);
            return { ...state };
        }
        case "PLAYER_CHOOSE": {
            state.playerPick = action.choose;
            return { ...state };
        }
        default: return state;
    }
}