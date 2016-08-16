import {ApplicationUser} from "../user/applicationuser";
export class User {
    constructor(
        public email: string,
        public password: string,
        public firstName?: string,
        public lastName?: string,
        public applicationUser?: ApplicationUser
    ) {}
}
