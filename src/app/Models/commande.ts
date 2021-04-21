export class Commande{
  _id: string;
  vendu: boolean;
  date: Date;
  client: string;
  produits: [
    {
      _id: string;
      qte: number;
    }
  ];

  constructor() {
  }
}
