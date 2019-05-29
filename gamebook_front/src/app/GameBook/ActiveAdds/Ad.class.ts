export class Ad {
    constructor(public id: string, public name: string, public validFrom: Date, public validUntil: Date, public imagePath: string) {
      this.id = id;
      this.name = name;
      this.validFrom = validFrom;
      this.validUntil = validUntil;
      this.imagePath = imagePath;
    }
  }