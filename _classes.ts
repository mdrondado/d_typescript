interface Cachorro {
    readonly nome: string;
    readonly idade:number;
    readonly parqueFavorito?: string; //? para parametro opcional
}

type CachorroSomenteLeitura = {
    readonly [k in keyof Cachorro]-?: Cachorro[k];
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
};

const cao = new MeuCachorro('Apolo', 14);