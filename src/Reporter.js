import { Timer } from "./timer.js";

export class Reporter {
  constructor() {}

  warn(message) {
    console.warn(message);
  }

  panic(message, e) {
    console.error(message, e);
  }

  activityTimer(name) {
    // return new ActivityTimer(this.reporter, name);
    return new Timer(this.reporter, name);
  }
}
