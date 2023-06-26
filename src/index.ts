import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

//Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

/**
 * Create an instance of MatchReader and pass in something satifying
 * the 'DataReader' interface
 */
const matchReader = new MatchReader(csvFileReader);
matchReader.load(); //now anywhere below you can reference matchReader.matches
console.log(matchReader.matches);

let manUnitedWins = 0;
//iteration to check number of wins for Manchester United at home and away games
for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Manchester United won ${manUnitedWins} wins`);
