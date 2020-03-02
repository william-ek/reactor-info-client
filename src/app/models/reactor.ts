export class Reactor {

  public id: string;
  public version: number;
  public type: string;
  public manufacturer: string;
  public serialNumber: string;
  public description: string;
  public facilityCode: string;
  public locationDescription: string;

  constructor(id: string, type: string, manufacturer: string, serialNumber: string, description: string, facilityCode: string, locationDescription: string) {

    this.id = id;
    this.type = type;
    this.manufacturer = manufacturer;
    this.serialNumber = serialNumber;
    this.description = description;
    this.facilityCode = facilityCode;
    this.locationDescription = locationDescription;
  }

}
