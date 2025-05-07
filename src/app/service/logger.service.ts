export class LoggerService {
  log(message: string): void {
    console.log(message);
  }

  debug(message: string): void {
    console.debug(message);
  }

  info(message: string): void {
    console.info(message);
  }

  error(message: string): void {
    console.error(message);
  }
}
