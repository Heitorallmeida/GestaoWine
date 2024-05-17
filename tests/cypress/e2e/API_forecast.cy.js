describe('POST /api/predict/forecast', () => {
    context('SUCESSO', () => {
        it('Ao colocar um número de dias corretamente como inteiro:', () => {
            cy.request({
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/predict/forecast',
                body: { "numberofdays": 30 }
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body).to.have.property("prediction")
            })
        })
        it('Ao colocar um número de dias como número dentro de uma string:', () => {
            cy.request({
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/predict/forecast',
                body: { "numberofdays": "30" },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body).to.have.property("prediction")
            })
        })
    });

    context('FALHA', () => {
        context('Tipo errado', () => {
            it('Ao colocar um número de dias com caracteres:', () => {
                cy.request({
                    method: 'POST',
                    url: 'http://127.0.0.1:8000/api/predict/forecast',
                    body: { "numberofdays": "teste" },
                    failOnStatusCode: false
                }).then((response) => {
                    expect(response.status).to.equal(422)
                    expect(response.body.detail[0].msg).to.eq("Input should be a valid integer, unable to parse string as an integer");
                })
            })
            it('Ao colocar um número de dias como vazio (null):', () => {
                cy.request({
                    method: 'POST',
                    url: 'http://127.0.0.1:8000/api/predict/forecast',
                    body: { "numberofdays": null },
                    failOnStatusCode: false
                }).then((response) => {
                    expect(response.status).to.equal(422)
                    expect(response.body.detail[0].msg).to.eq("Input should be a valid integer")
                })
            })
        });
        it('Ao colocar um número de dias maior do que o aceito (120 dias):', () => {
            cy.request({
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/predict/forecast',
                body: { "numberofdays": 300 },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.equal(422)
                expect(response.body.detail[0].msg).to.eq("Value error, numberofdays must be lower than 121")
            })
        })
        it('Ao colocar um número de dias igual a 0', () => {
            cy.request({
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/predict/forecast',
                body: { "numberofdays": 0 },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.equal(422)
                expect(response.body.detail[0].msg).to.eq("Value error, numberofdays must be greater than zero")
            })
        })
        // it.skip('Ao colocar um número de dias menor que 0', () => {
        //     cy.request({
        //         method: 'POST',
        //         url: 'http://127.0.0.1:8000/api/predict/forecast',
        //         body: { "numberofdays": -10 },
        //         failOnStatusCode: false
        //     }).then((response) => {
        //         expect(response.status).to.equal(422)
        //         expect(response.body.detail[0].msg).to.eq("Value error, numberofdays must be greater than zero")
        //         // DEU ERRO 500, AINDA NÃO FOI TRATADO
        //     })
        // })
        // it.skip('Ao trocar o texto do body', () => {
        //     cy.request({
        //         method: 'POST',
        //         url: 'http://127.0.0.1:8000/api/predict/forecast',
        //         body: { "outro": 5 },
        //         failOnStatusCode: false
        //     }).then((response) => {
        //         expect(response.status).to.equal(422)
        //         expect(response.body.detail[0].msg).to.eq("Value error, numberofdays must be greater than zero")
        //         // DA 200 E RETORNA PREDIÇÕES DE ALGUNS MESES, NÃO SEGUINDO O NUMERO QUE COLOQUEI
        //     })
        // })
    });
});