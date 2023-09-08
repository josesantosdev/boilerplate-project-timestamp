const DateEntity = require('../entities/DateEntity');

class DateService {
    static getDateInfo(dateString) {
  
      if (!isNaN(dateString)) {
        const unixTimestamp = parseInt(dateString);

        const date = new Date(unixTimestamp);

        return new DateEntity(unixTimestamp, date.toUTCString());
      }
  
      return date = new Date(dateString)
    }
  }

module.exports = DateService;