import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

//Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

/**
 * Create an instance of MatchReader and pass in something satifying
 * the 'DataReader' interface
 */
const matchReader = new MatchReader(csvFileReader);
matchReader.load(); //now anywhere below you can reference matchReader.matches
console.log(matchReader.matches);

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
