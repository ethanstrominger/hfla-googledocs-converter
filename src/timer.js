export class Timer {
  constructor(reporter, name) {
    this.reporter = reporter;
    this.name = name;
    this.start();
    this.time = Date.now();
  }

  start() {
    this.setStatus("started");
  }

  setStatus(status) {
    console.log(
      "Status:",
      status.padEnd(16),
      " | elapsed:",
      (Date.now() - this.time) / 1000,
      "seconds"
    );
    this.time = Date.now();
  }

  end() {
    this.setStatus("ended");
  }
}
