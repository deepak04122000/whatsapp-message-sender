import { UserData } from "./utils/types";

export class UserReader {
  public userData: UserData[];
  constructor() {
    this.userData = [];
  }

  read(data: string[][]): void {
    try {
      data.forEach((u, i) => {
        this.userData.push({ name: u[0], phone: parseInt(u[1]) });
      });
    } catch (e) {
      console.log(e);
    }
  }
}
