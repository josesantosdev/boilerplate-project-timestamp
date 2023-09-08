const DateEntity = require('../entities/dateEntity');

class DateService {
  static getDateInfo(dateString) {
    let date; // Declare a variável date no escopo do método

    // Verifica se a entrada é um número (Unix timestamp)
    if (!isNaN(dateString)) {
      const unixTimestamp = Number(dateString);

      // Converte o Unix timestamp em milissegundos
      date = new Date(unixTimestamp);

      return new DateEntity(unixTimestamp, date.toUTCString());
    }

    date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return new DateEntity(null, 'Invalid Date');
    }

    return new DateEntity(date.getTime(), date.toUTCString());
  }
}

module.exports = DateService;