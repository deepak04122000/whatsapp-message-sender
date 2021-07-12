import { UserData } from "./utils/types";

export class LinkGenerator {
  public links: string[];
  constructor(public message: string) {
    this.links = [];
  }

  /**
   *@brief "generat links"
   *@return
   */
  generate(data: UserData[]): void {
    data.forEach((e) => {
      let msg = this.message;

      // For name
      let splitedMessage = msg.split(`#name`);
      msg = `${splitedMessage[0]}`;
      for (let i = 0; i < splitedMessage.length - 1; i++) {
        msg = `${msg}${e.name}${splitedMessage[i + 1]}`;
      }

      // // For phone
      // splitedMessage = msg.split(`#phone`);
      // msg = `${splitedMessage[0]}`;
      // for (let i = 0; i < splitedMessage.length - 1; i++) {
      //   msg = `${msg}${e.phone}${splitedMessage[i + 1]}`;
      // }

      msg.trim();

      this.links.push(
        `https://web.whatsapp.com/send?phone=+91${e.phone}&text=${msg}`
      );
    });
  }
  //   generate(data: string[][]): void {
  //     data.forEach((e) => {
  //       const splitedMessage = this.message.split("#name");
  //       let msg = splitedMessage[0];
  //       for (let i = 0; i < splitedMessage.length - 1; i++) {
  //         msg = `${msg}${e[0]}${splitedMessage[i + 1]}`;
  //       }
  //       msg.trim();

  //       this.links.push(
  //         `https://web.whatsapp.com/send?phone=+91${element[1]}&text=${msg}`
  //       );
  //     });
  //   }
}
