export class Model {
  constructor(name) {
    this.name = name;
  }

  getModel() {
    return this.name;
  }

  setModel(name) {
    this.name = name;
    return this;
  }
}
