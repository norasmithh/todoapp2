import { TodoItem } from "./todoitem";

export class Model {
  name: string;
  items: TodoItem[];
  user: any;

  constructor() {
    this.name ="Erva";
    this.items = [
      { description: "kahvaltı", action: "yes" },
      { description: "spor", action: "yes" },
      { description: "alışveriş", action: "no" }
    ];
  }
}