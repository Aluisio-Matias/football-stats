import fs from 'fs';
import { MatchResult } from './MatchResult';

//defining a tuple to return the data from the cvs file
type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader<DataType> {
  data: DataType[] = [];
  
  constructor(public filename: string) {};

  abstract mapRow(row: string[]): DataType;

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
      .split('\n')
      .map((row: string): string[] => {
      return row.split(',');
    }).map(this.mapRow);
  };

};