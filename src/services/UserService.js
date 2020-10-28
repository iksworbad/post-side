
export class UserService {
    constructor(api) {
        this.api = api
    }

    getUsers() {
        return this.api.getUsers();
    }
    getUser(id) {
        return this.api.getUser(id);
    }
    getUserPosts(id) {
        return this.api.getUserPosts(id);
    }
}