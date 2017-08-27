export class Constellation {
	imagePath: string;
	constellationName: string;
	constellationId?: string;
	userId?: string;

	constructor(imagePath: string,
							constellationName: string,
							constellationId?: string,
							userId?: string) {

			this.imagePath = imagePath;
			this.constellationName = constellationName;
			this.constellationId = constellationId;
			this.userId = userId;
	}
}