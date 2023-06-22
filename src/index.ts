import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader.data)

//enum - enumeration // collection of closely related values
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
};

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
