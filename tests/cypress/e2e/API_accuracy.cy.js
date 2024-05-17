describe('GET /api/accuracy', () => {
    context('SUCESSO', () => {
        it('Sucesso ao solicitar o get da acuracia', () => {
            cy.request({
                method: 'GET',
                url: 'http://127.0.0.1:8000/api/accuracy'
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body).to.have.property("accuracy")
            })
        })
    });
})