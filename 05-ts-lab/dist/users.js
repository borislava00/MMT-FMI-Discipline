export var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READER"] = 2] = "READER";
    Role[Role["ADMIN"] = 3] = "ADMIN";
})(Role || (Role = {}));
export class UserBase {
    constructor(id, firstName, lastName, email, password, roles = [], contact) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.roles = roles;
        this.contact = contact;
    }
    get salutation() {
        return this.getSalutation();
    }
    getSalutation() {
        return `Hi ${this.firstName} ${this.lastName} in roles: ${this.roles.map(r => Role[r]).join(", ")}`;
    }
}
//# sourceMappingURL=users.js.map