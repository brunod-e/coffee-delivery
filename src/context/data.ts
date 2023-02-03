import Expresso from "../assets/coffees/expresso.svg";
import Americano from "../assets/coffees/americano.svg";
import ExpressoCremoso from "../assets/coffees/expresso-cremoso.svg";
import ExpressoGelado from "../assets/coffees/cafe-gelado.svg";
import CafeComLeite from "../assets/coffees/cafe-com-leite.svg";
import Latte from "../assets/coffees/latte.svg";
import Capuccino from "../assets/coffees/capuccino.svg";
import Macchiato from "../assets/coffees/macchiato.svg";
import Mocaccino from "../assets/coffees/mocaccino.svg";
import ChocolateQuente from "../assets/coffees/chocolate-quente.svg";
import Cubano from "../assets/coffees/cubano.svg";
import Havaiano from "../assets/coffees/havaiano.svg";
import Arabe from "../assets/coffees/arabe.svg";
import Irlandes from "../assets/coffees/irlandes.svg";

export const coffeesData = [
  {
    id: "1",
    coffeeImg: Expresso,
    types: ["tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    id: "2",
    coffeeImg: Americano,
    types: ["tradicional"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9,90",
  },
  {
    id: "3",
    coffeeImg: ExpressoCremoso,
    types: ["tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: "9,90",
  },
  {
    id: "4",
    coffeeImg: ExpressoGelado,
    types: ["tradicional", "gelado"],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "9,90",
  },
  {
    id: "5",
    coffeeImg: CafeComLeite,
    types: ["tradicional", "com leite"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "9,90",
  },
  {
    id: "6",
    coffeeImg: Latte,
    types: ["tradicional", "com leite"],
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "9,90",
  },
  {
    id: "7",
    coffeeImg: Capuccino,
    types: ["tradicional", "com leite"],
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "9,90",
  },
  {
    id: "8",
    coffeeImg: Macchiato,
    types: ["tradicional", "com leite"],
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: "9,90",
  },
  {
    id: "9",
    coffeeImg: Mocaccino,
    types: ["tradicional", "com leite"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9,90",
  },
  {
    id: "10",
    coffeeImg: ChocolateQuente,
    types: ["especial", "com leite"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "9,90",
  },
  {
    id: "11",
    coffeeImg: Cubano,
    types: ["especial", "alcoólico", "gelado"],
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "9,90",
  },
  {
    id: "12",
    coffeeImg: Havaiano,
    types: ["especial"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: "9,90",
  },
  {
    id: "13",
    coffeeImg: Arabe,
    types: ["especial"],
    title: "Arabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: "9,90",
  },
  {
    id: "14",
    coffeeImg: Irlandes,
    types: ["especial", "alcoólico"],
    title: "Irlandes",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: "9,90",
  },
];
