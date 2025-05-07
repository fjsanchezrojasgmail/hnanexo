import { MessageService } from '../service/message.service';

export class DateUtil {
    private static regexpPlainDate = /^\d{4}-\d{2}-\d{2}$/;
    private static ZERO_HHMMSS_TIMEZONE = 'T00:00:00Z';
    static MILLISECS_OF_A_MINUTE = 60000;
    static MILLISECS_OF_A_DAY = 86400000;
    static MILLISECS_OF_A_MONTH = 2592000000;

    // Obtiene la edad a partir de una fecha de nacimiento
    static getAgeFromBirthdate(birthDate: Date): number {
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    // Calcula la edad en meses y días si es menor de un año
    static getAgeBabyFromBirthdate(birthDate: Date, messageService: any): string {
        const ageMs = Date.now() - birthDate.getTime();
        const ageInMonths = Math.floor(ageMs / DateUtil.MILLISECS_OF_A_MONTH);
        const ageInDays = Math.floor((ageMs % DateUtil.MILLISECS_OF_A_MONTH) / DateUtil.MILLISECS_OF_A_DAY);

        if (ageInMonths < 1) {
            return `${ageInDays} ${messageService.getMessage('days')}`;
        } else {
            return `${ageInMonths} ${messageService.getMessage('months')} ${ageInDays} ${messageService.getMessage('days')}`;
        }
    }

    // Similar a getAgeBabyFromBirthdate pero devuelve un string con el idioma
    static getAgeBabyStringFromBirthdate(birthDate: Date, language: string): string {
        const ageMs = Date.now() - birthDate.getTime();
        const ageInMonths = Math.floor(ageMs / DateUtil.MILLISECS_OF_A_MONTH);
        const ageInDays = Math.floor((ageMs % DateUtil.MILLISECS_OF_A_MONTH) / DateUtil.MILLISECS_OF_A_DAY);
        const monthsLabel = language === 'en' ? 'months' : 'meses';
        const daysLabel = language === 'en' ? 'days' : 'días';

        if (ageInMonths < 1) {
            return `${ageInDays} ${daysLabel}`;
        } else {
            return `${ageInMonths} ${monthsLabel} ${ageInDays} ${daysLabel}`;
        }
    }

    // Obtiene la cantidad de meses a partir de una fecha de nacimiento
    static getMonthsFromBirthdate(birthDate: Date): number {
        const ageMs = Date.now() - birthDate.getTime();
        return Math.floor(ageMs / DateUtil.MILLISECS_OF_A_MONTH);
    }

    // Calcula el tiempo de estancia entre dos fechas en minutos
    static getTimeStay(valueDate: any, messageService: MessageService, endDate: Date): number {
        return Math.floor((endDate.getTime() - valueDate.getTime()) / DateUtil.MILLISECS_OF_A_MINUTE);
    }

    // Calcula la diferencia en días entre dos fechas
    static getDateDiff(valueDate0: any, valueDate1: any): number {
        return Math.floor((valueDate1.getTime() - valueDate0.getTime()) / DateUtil.MILLISECS_OF_A_DAY);
    }

    // Calcula la diferencia en horas entre dos fechas
    static getDateDiffHours(valueDate0: any, valueDate1: any): number {
        return Math.floor((valueDate1.getTime() - valueDate0.getTime()) / (1000 * 60 * 60));
    }

    // Calcula la diferencia en minutos entre dos fechas
    static getDateDiffMinutes(valueDate0: any, valueDate1: any): number {
        return Math.floor((valueDate1.getTime() - valueDate0.getTime()) / (1000 * 60));
    }

    // Calcula la diferencia en una unidad decimal entre dos fechas
    static getDateDiffPeriodDecimal(valueDate0: any, valueDate1: any, period: number): number {
        return (valueDate1.getTime() - valueDate0.getTime()) / period;
    }

    // Calcula la diferencia en un periodo dado entre dos fechas
    static getDateDiffPeriod(valueDate0: any, valueDate1: any, period: number): number {
        return Math.floor((valueDate1.getTime() - valueDate0.getTime()) / period);
    }

    // Devuelve la diferencia de fecha en formato de cadena
    static getDateDiffString(dateToCompare: Date, currentDate: Date, messageService: MessageService): string {
        const diff = DateUtil.getDateDiff(dateToCompare, currentDate);
        return `${diff} ${messageService.getMessage(diff > 1 ? 'days' : 'day')}`;
    }

    // Cambia la posición del día en la fecha para que sea el primero del mes
    static changePositionDayForMonth(date: string): string {
        return `${date.substring(0, 7)}-01`;
    }

    // Devuelve solo la hora de una fecha
    static getHour(value: any): string {
        const date = new Date(value);
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    // Devuelve la hora de la fecha sin la zona horaria
    static getCurrentHourFromDatatime(time: string): string {
        const date = new Date(time);
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    // Devuelve la hora local actual
    static getCurrentLocalHour(): string {
        const date = new Date();
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    // Formatea la fecha para mostrarla
    static getDateFormat(value: any, messageService: MessageService): string {
        const date = new Date(value);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    // Formatea la fecha sin el año
    static getDateFormatWithoutYear(value: any, messageService: MessageService): string {
        const date = new Date(value);
        return `${date.getDate()}/${date.getMonth() + 1}`;
    }

    // Método obsoleto para obtener fecha desde HTML
    static getDate(value: any): string {
        const date = new Date(value);
        return date.toISOString();
    }

    // Formatea la fecha y hora
    static getDateTimeFormat(date: Date): string {
        return date.toISOString();
    }

    // Formatea la fecha y hora para el final del día
    static getDateTimeFormatEndDay(date: Date): string {
        return `${date.toISOString().split('T')[0]}T23:59:59Z`;
    }

    // Formatea una fecha para los servicios REST de Bidafarma
    static getDateForRestServicesBidafarma(date: Date): string {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    // Formatea una fecha para los servicios REST con zona horaria
    static getDateForRestServicesWithTimezone(date: Date): string {
        return date.toISOString();
    }

    // Devuelve la fecha sin hora para servicios REST
    static getDateWithoutTimeForRestServices(date: Date): string {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    // Devuelve la fecha en formato REST
    static getDateForRestServices(date: Date): string {
        return date.toISOString();
    }

    // Formatea la fecha para el inicio del día
    static getDateForRestServicesWithStarDay(date: Date): string {
        return `${date.toISOString().split('T')[0]}T00:00:00Z`;
    }

    // Formatea la fecha para el final del día
    static getDateForRestServicesWithEndDay(date: Date): string {
        return `${date.toISOString().split('T')[0]}T23:59:59Z`;
    }

    // Sin zona horaria
    static getDateForRestServicesNotimezone(date: Date): string {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }

    // Formatea la fecha para el servicio REST con zona horaria 0
    static getDateForRestServicesZeroTimezone(date: Date): string {
        const utcDate = new Date(date.toISOString());
        return `${utcDate.getUTCFullYear()}-${utcDate.getUTCMonth() + 1}-${utcDate.getUTCDate()}T${utcDate.getUTCHours()}:${utcDate.getUTCMinutes()}:${utcDate.getUTCSeconds()}Z`;
    }

    // Formatea la fecha y hora para REST sin zona horaria
    static getDateTimeForRestServicesNotimezone(date: Date): string {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }

    // Convierte una fecha de string en formato plain date
    static getDateForRestServicesWithTimezoneFromPlainDate(stringDate: string): string {
        return new Date(stringDate).toISOString();
    }

    // Verifica si el valor es una fecha en formato "plain date"
    static containsPlainDate(value: any): boolean {
        return DateUtil.regexpPlainDate.test(value);
    }

    // Añade minutos a una fecha
    static addMinutes(date: Date, numberOfMinutes: number): void {
        date.setMinutes(date.getMinutes() + numberOfMinutes);
    }

    // Añade días a una fecha
    static addDays(date: Date, numberOfDays: number): void {
        date.setDate(date.getDate() + numberOfDays);
    }

    // Añade meses a una fecha (considerando un mes como 30 días)
    static addMonths(date: Date, numberOfMonths: number): void {
        date.setMonth(date.getMonth() + numberOfMonths);
    }

    // Convierte la fecha en un formato string para servicios
    static getStringDateForServices(date: Date): string {
        return date.toISOString().split('T')[0];
    }

    // Convierte la edad en una fecha estimada de nacimiento
    static getDateFromAge(age: string, ageTo: Boolean, ageFrom: Boolean): string {
        const date = new Date();
        if (ageTo) {
            date.setFullYear(date.getFullYear() - parseInt(age));
        }
        if (ageFrom) {
            date.setFullYear(date.getFullYear() - (parseInt(age) + 1));
        }
        return date.toISOString().split('T')[0];
    }

    // Resetea la hora de una fecha a 00:00:00
    private static resetTime(date: Date): void {
        date.setHours(0, 0, 0, 0);
    }

    // Rellena con ceros el número de una sola cifra
    private static pad(number: number): string {
        return number < 10 ? '0' + number : String(number);
    }

    // Crea una fecha sin hora desde una cadena
    static createDateWithoutTime(stringDate: string): Date {
        const date = new Date(stringDate);
        DateUtil.resetTime(date);
        return date;
    }

    // Obtiene un periodo a partir de los minutos
    static getPeriodFromMinutes(minuts: number, language: string): string {
        return `${minuts} ${language === 'en' ? 'minutes' : 'minutos'}`;
    }
}
