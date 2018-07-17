import { IndexedObject } from "./IndexedObject.model";

export class AnnouncementEntry{
	private description: string;

	constructor(description: string) {
		this.description = description;
	}

	static FromSheet(values: any[]): AnnouncementEntry {
		const annoEntry = new AnnouncementEntry(values[0]);
		return annoEntry;
	}

	getDescription(): string {
		return this.description;
	}

	setDescription(description: string): void {
		this.description = description;
	}

	toSheet(): any[] {
		return [this.description];
	}
}