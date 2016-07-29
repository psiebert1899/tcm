export class ApplicationUser{
    constructor(
        public email:string,
        public firstName?:string,
        public lastName?:string,
        public image?: string,
        public userId ?: string,
        public manager?: ApplicationUser,
        public employees?:ApplicationUser[]
    ){}
}