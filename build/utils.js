"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateParts = dateString
        .split('/')
        .map((value) => {
        return parseInt(value);
    });
    //changing the date structure from CSV file to Date object
    //returning year / month (0 indexed = Jan === 0 and so on) / then the day
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
