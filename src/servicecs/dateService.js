import DateEntity from '../entities/dateEntity';

export class DateService {
    static getDateInfo(dateString) {
        const date = new Date(dateString);

        if (isNaN(date.getTime())){
            return new DateEntity(null, 'Invalid Date');
        }

        return new DateEntity(date.getTime(), date.toUTCString());
    }
}