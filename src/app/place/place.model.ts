export class Place {
    constructor(
        private name: string,
        private temperature?: string,
        private description?: string,
        private icon?: string,
        public _id?: string
    ) {}
}