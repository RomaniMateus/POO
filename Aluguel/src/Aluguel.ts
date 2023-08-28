//creating class Aluguel

import {Bicicleta} from "./Bicicleta";
import {Cliente} from "./Cliente";

export class Aluguel {
    constructor(
        public cliente: Cliente,
        public bicicleta: Bicicleta,
        public preco: number,
        public dataInicio: Date,
        public dataFim: Date,
    ) { }
}