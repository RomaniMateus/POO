import {Aluguel} from "./src/Aluguel";
import {Cliente} from "./src/Cliente";
import {Bicicleta} from "./src/Bicicleta";

const data_teste: Date = new Date(2023, 8, 23)

const cliente1: Cliente = new Cliente("João");
let bicicleta1: Bicicleta = new Bicicleta("Caloi", 10, true);

// Fazendo o aluguel da bicicleta 1
if (bicicleta1.disponivel) {
   let aluguel1 = alugar(cliente1, bicicleta1, new Date(2021, 8, 22), new Date(2021, 8, 23));
   console.log("Aluguel realizado com sucesso!");
} else {
    console.log("Bicicleta indisponível");
}
// Devolvendo a bicicleta 1
devolverBicicleta(aluguel1, data_teste);



function alugar(cliente: Cliente, bicicleta: Bicicleta, dataInicio: Date, dataFim: Date): Aluguel {

   if (!bicicleta.disponivel) {
      console.log("Não é possível alugar uma bicicleta indisponível");
      return null;
   }

   let tempoDeAluguel: number = calcularTempoDeAluguel(dataInicio, dataFim);
   let precoTotal: number = tempoDeAluguel * bicicleta.precoAluguel;

   bicicleta.disponivel = false;

   return new Aluguel(cliente, bicicleta, precoTotal, dataInicio, dataFim);
}

function calcularTempoDeAluguel(dataInicio: Date, dataFim: Date): number {
   let tempoDeAluguel: number = dataFim.getTime() - dataInicio.getTime();
   return tempoDeAluguel / (1000 * 3600 * 24);
}

function devolverBicicleta(aluguel: Aluguel, data_da_devolucao: Date): void {

   if (data_da_devolucao <= aluguel.dataFim) {
      aluguel.bicicleta.disponivel = true;
      return;
   }

   console.log("Atraso na devolução da bicicleta");
}
