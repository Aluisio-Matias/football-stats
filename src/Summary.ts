import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
};

export interface OutputTarget {
  print(report: string): void;
};

export class Summary {
  static winsAnalysisHtmlReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    )
  }

  constructor(
    public analyzer: Analyzer, 
    public outputTarger: OutputTarget) {};

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarger.print(report);
  }
};

