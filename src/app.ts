import { CsvFileReader } from "./Csvreader";
import { LinkGenerator } from "./LinkGenerator";
import { UserReader } from "./UserReader";
import { WhatsAppSender } from "./WhatsAppSender";

const csvReader = new CsvFileReader("FormDetails.csv");
csvReader.read();

const userReader = new UserReader();
userReader.read(csvReader.data);

const generator = new LinkGenerator(
  "Dear #name, we gald to #name. #phone is this your number?"
);

generator.generate(userReader.userData);
console.log(generator.links);

const sender = new WhatsAppSender(generator.links);
sender.send();
