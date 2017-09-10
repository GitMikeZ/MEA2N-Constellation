export class Constellation {
	url: string;
	name: string;
	constellationId: string;
	userId: string;

	constructor(url: string, name: string, constellationId: string, userId: string) {

			this.url = url;
			this.name = name;
			this.constellationId = constellationId;
			this.userId = userId;
	}
}