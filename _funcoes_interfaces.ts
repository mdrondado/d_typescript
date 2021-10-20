console.log('Typescript');


/*
exemplo de checagem do tipo de parametros da função

function soma(a: number, b:number){

    retur a + b;
}

soma('a', 'b');
*/

/*
interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna:boolean;

}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre'
    executarRugido: (alturaEmDecibeis) => (`$(alturaEmDecibeis)dB`)
}

animal.executarRugido('s');

const felino: IFelino = {
    nome: 'Leao',
    tipo: 'terrestre',
    visaoNoturna: true
}

*/

//types

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino |ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre'
}


