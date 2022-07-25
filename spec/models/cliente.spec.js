const Cliente = require('../../models/cliente')

describe('Clientes', () => {
    beforeEach(() => {

    })

    it('Valida propriedadaes de um cliente', () => {
        let cliente = Cliente.primeiro();
        expect(cliente.id).not.toBeUndefined()
        expect(cliente.nome).not.toBeUndefined()
        expect(cliente.telefone).not.toBeUndefined()
    });

    it('Retorna todos', () => {
        let cliente = Cliente.todos();
        expect(cliente.length).toEqual(10)
    });
    it('Nome do cliente Upercase', () => {
        let cliente = Cliente.primeiro();
        cliente.nome = 'danilo'
        expect(cliente.nomeUpercase()).toEqual('DANILO')
    });
})