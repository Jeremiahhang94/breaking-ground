export class CamperEntry{
	private name: string;
	private accomodation: string;
	private workshop: string;
	private lg: string;

	constructor(name: string, lg: string, accomodation: string, workshop: string) {
		this.name = name;
		this.lg = lg;
		this.accomodation = accomodation;
		this.workshop = workshop;
	}

	static FromSheet(values: any[]): CamperEntry {
		const entry = new CamperEntry(values[0], values[1], values[2], values[3]);
		return entry;
	}

	getName(): string { return this.name; }
	getLg(): string { return this.lg; }
	getAccomodation(): string { return this.accomodation; }
	getWorkshop(): string { return this.workshop; }
}