describe('Loja', () => {

  it('Deve renderizar a Loja', () => {
    cy.visit('/')
  })

  describe('Verifica o header', () => {
    it('Deve ter o componente Header', () => {
      cy.visit('/').get('header')
    })

    it('Deve ter a lista de itens', () => {
      cy.visit('/').get('header').get('ul');
    })

    it('Deve ter os 3 icones de procura, perfil e carrinho', () => {
      cy.visit('/').get('header').get('[data-cy=conta]')
    })
  })

  describe('Verifica o aside', () => {
    it('Deve ter os checkboxes de busca no conteudo', () => {
      cy.visit('/').get('aside')
    })

    it('Deve ter o titulo na funcionalidade de busca', () => {
      cy.visit('/')
        .get('aside')
        .get('[data-cy=title]')
        .contains('Refine sua busca')
    })

    it('Deve ter o subtitulo na funcionalidade de busca', () => {
      cy.visit('/')
        .get('aside')
        .get('[data-cy=subtitle]')
        .contains('Por preço')
    })

    it('Deve ter os checkbox de busca por filtro', () => {
      cy.visit('/').get('aside').get('[data-cy=list-checkbox]')
    })

    it('Deve ter os checkbox de busca por filtro com 5 checkbox', () => {
      cy.visit('/')
        .get('aside')
        .get('[data-cy=list-checkbox]')
        .find('[type=radio]')
        .should('have.length', 5)
    })
  })

  describe('Verifica o conteúdo principal', () => {

    it('Se tem a tag main', () => {
      cy.visit('/').get('main')
    })
  })
})

export {}
