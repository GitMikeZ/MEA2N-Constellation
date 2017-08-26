export class Constellation {
	imagePath: string;
	constellationName: string;
	constellationDes: string;
	constellationId?: string;
	userId?: string;

	constructor(imagePath: string,
							constellationName: string,
							constellationDes: string,
							constellationId?: string,
							userId?: string) {

			this.imagePath = imagePath;
			this.constellationName = constellationName;
			this.constellationDes = constellationDes;
			this.constellationId = constellationId;
			this.userId = userId;
	}
}