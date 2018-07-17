export class CamperEntry{
	private name: string;
	private accomodation: string;
	private workshop: string;

	constructor(name: string, accomodation: string, workshop: string) {
		this.name = name;
		this.accomodation = accomodation;
		this.workshop = workshop;
	}

	static FromSheet(values: any[]): CamperEntry {
		const entry = new CamperEntry(values[0], values[1], values[2]);
		return entry;
	}

	getName(): string { return this.name; }
	getAccomodation(): string { return this.accomodation; }
	getWorkshop(): string { return this.workshop; }
}