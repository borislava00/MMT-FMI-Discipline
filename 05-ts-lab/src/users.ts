export type IdType = number;

export interface Person {
    id: IdType;
    firstName: string;
    lastName: string;
    email: string;
    contacts?: Contact; 
}

export interface Contact {
    coutry: string;
    city?: string;
    address?: string;
    phone?: string;
}

export interface User extends Person {
    password: string;
    roles: Array<Role>;
    readonly salutation: string;
    getSalutation: () => string;
}

export enum Role {
    AUTHOR = 1, READER, ADMIN
}

export class UserBase implements User {
    constructor(
        public id: IdType,
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public roles: Role[] = [],
        public contact?: Contact | undefined,
    ) {}

    get salutation() {
        return this.getSalutation();
    }
    
    getSalutation(): string {
        return `Hi ${this.firstName} ${this.lastName} in roles: ${this.roles.map(r => Role[r]).join(", ")}`
    }
}