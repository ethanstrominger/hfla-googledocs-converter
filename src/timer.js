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
    console.log("Status:", status);
    console.log("Time:", Date.now() - this.time);
    this.time = Date.now();
  }

  end() {
    this.setStatus("ended");
  }
}
