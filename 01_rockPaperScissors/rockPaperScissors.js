'use strict';
const rockPaperScissors = function (rounds) {
    rounds = rounds || 3;
    let result = [];
    let plays = ['rock', 'paper', 'scissors'];

    let generate = function(round, play){
        if(round === 0){
            result.push(play);
            return;
        }
        for(let i = 0; i < plays.length; i++){
            let currentPlay = plays[i];
            generate(round - 1, play.concat(currentPlay));
        }
    }
    generate(rounds, []);
    return result;
}