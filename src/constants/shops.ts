import { Item } from "../models/item";
import { Shop } from "../models/shop";

export const shops: Shop[] = [
  { id: 1, title: "Compra do mês 1", price: "R$720.00", date: "17/01/25", items: [] },
  { id: 1, title: "Compra do mês 2", price: "R$743.00", date: "17/02/25", items: [] },
  { id: 1, title: "Compra do mês 3", price: "R$624.00", date: "17/03/25", items: [] },
  { id: 1, title: "Compra do mês 4", price: "R$700.00", date: "17/04/25", items: [] },
  { id: 1, title: "Compra do mês 5", price: "R$811.00", date: "17/05/25", items: [] },
];

export const itensMock: Item[] = [
  { id: 1, name: "Produto 1", amount: 2, price: 5, type_unit: 1 },
  { id: 2, name: "Produto 2", amount: 1, price: 10, type_unit: 1 },
  { id: 3, name: "Produto 3", amount: 3, price: 2.5, type_unit: 1 },
  { id: 4, name: "Produto 4", amount: 5, price: 1.2, type_unit: 1 },
];