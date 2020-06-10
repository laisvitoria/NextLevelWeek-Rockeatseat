import Knex from 'knex'

export async function seed(knex: Knex){
    await knex('items').insert([
        { image: 'lampadas.svg', titulo: 'Lâmpadas'},
        { image: 'baterias.svg',titulo: 'Pilhas e Baterias'},
        { image: 'papeis-papelao.svg', titulo: 'Papéis e Papelão'},
        { image: 'eletronicos.svg', titulo: 'Resíduos Eletrônicos'},
        { image: 'organicos.svg', titulo: 'Resíduos Orgânicos'},
        { image: 'oleo.svg', titulo: 'Óleo de cozinha'},
    ]);
}