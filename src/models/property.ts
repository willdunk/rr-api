import { ObjectId } from "mongodb";

export default class Property {
  constructor(public name: string, public id?: ObjectId) {

  }
}