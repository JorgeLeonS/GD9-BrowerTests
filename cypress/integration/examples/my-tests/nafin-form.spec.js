describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', () => {
    describe('Fill Form and load 24 rows', () => {
        it('Should fill form and load cotización table', () => {
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do');
            cy.get('#dispDate').clear().type('05/05/2020 {enter}');
            cy.get('#creditAmount').clear().type(20000);
            cy.get('#paymentMethod').select('Mensual');
            cy.get('#period').select('2 años');
            cy.get('#rate').clear().type(15);
            cy.contains('Calcular').click();
            cy.contains('Ahora no').click();
            //Table
            cy.get('#resultadosSimulador').find('tbody').find('tr').its('length').should('eq',24);
        })
    })

    // describe('Fill Monto', () => {
    //     it('Should fill "Monto del Crédito"', () => {
    //         cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do');
    //         cy.contains('Monto del Crédito');
    //         cy.get('#creditAmount').clear().type(20000);
    //     })
    // })

    // describe('Fill Forma de pago', () => {
    //     it('Should fill "Forma de Pago"', () => {
    //         cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do');
    //         cy.contains('Forma de Pago');
    //         cy.get('#paymentMethod').select('Mensual');
    //     })
    // })
})