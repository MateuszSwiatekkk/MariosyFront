import {User} from "./user";

export interface Marios {
  mariosId:number;
  externalKeyMarios:string;
  mariosType:string;
  title:string;
  message:string;
  recipients:string[];
  sender:string;
  senderData: User;
}
