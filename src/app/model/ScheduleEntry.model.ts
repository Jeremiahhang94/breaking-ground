import { AnnouncementEntry } from "./AnnouncementEntry.model";
import { CAMP_DAYS } from "../utils/campInfo.util";

export class ScheduleEntry {
	private day: number;
	private time: string;
	private event: string;
	private venue: string;
	private remarks: string;
	private countdownTo: string;
	private date: Date;

	constructor(day: number, time: string, event: string, venue: string, remarks: string, countdownTo: string) {
		this.day = day;
		this.time = time;
		this.event = event;
		this.venue = venue || '';
		this.remarks = remarks || '';
		this.countdownTo = countdownTo;

		const timeArr = time.split(":");
		const date = CAMP_DAYS[day];
		const hour = timeArr[0];
		const minute = timeArr[1];
		this.date = new Date(`2018-07-${date}T${hour}:${minute}:00`);

	}

	getDay(): number { return this.day; }
	getTime(): string { return this.time; }
	getEvent(): string { return this.event; }
	getVenue(): string { return this.venue; }
	getRemarks(): string { return this.remarks; }
	getCountdownTo(): string { return this.countdownTo; }

	isPast(comparedTo: Date): boolean {
		return this.date < comparedTo;
	}

	static FromSheet(day: number, sheet: string[]): ScheduleEntry {
		return new ScheduleEntry(day, sheet[0], sheet[1], sheet[2], sheet[3], sheet[4]);
	}
	
}