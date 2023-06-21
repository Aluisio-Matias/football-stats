import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
}).split('\n').map((row: string): string[] => {
  return row.split(',');
});

//enum - enumeration // collection of closely related values
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
};

let manUnitedWins = 0;
//iteration to check number of wins for Manchester United at home and away games
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Manchester United won ${manUnitedWins} wins`);
