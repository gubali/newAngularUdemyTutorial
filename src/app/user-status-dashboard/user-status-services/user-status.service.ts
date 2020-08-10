
export class UserStatusService {
    public activeUsers = ["Max", "helen"];
    public inactiveUsers = ["Marry", "adam", "Jacbob"];

    setToActive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }

    setToInactive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }

}