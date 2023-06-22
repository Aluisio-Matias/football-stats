import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader('football.csv');
reader.read();

console.log(reader.data);

let manUnitedWins = 0;
//iteration to check number of wins for Manchester United at home and away games
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Manchester United won ${manUnitedWins} wins`);
