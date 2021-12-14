import{Cliente} from "./Cliente.js";
import { ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente ("Ricardo", 12346864962);
const cliente2 = new Cliente ("Alice", 14862168945);
const contaCorrenteRicardo = new ContaCorrente (cliente1, 1001);
contaCorrenteRicardo.depositar(500);

const contaCorrenteAlice = new ContaCorrente (cliente2, 1001);

contaCorrenteRicardo.transferir(200, contaCorrenteAlice);



console.log(ContaCorrente.numeroDeContas);



