"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
;
;
class Summary {
    static winsAnalysisHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    constructor(analyzer, outputTarger) {
        this.analyzer = analyzer;
        this.outputTarger = outputTarger;
    }
    ;
    buildAndPrintReport(matches) {
        const report = this.analyzer.run(matches);
        this.outputTarger.print(report);
    }
}
exports.Summary = Summary;
;
