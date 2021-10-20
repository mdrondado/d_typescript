
//generic types

function adicionaApendicesLista(array,valor) {
    return array.map(item => item + valor);
}

adicionaApendicesLista([1,2,3], 1);


interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        //redirecionar para a area de administração
    }
    //redirecionar para area do usuário
}