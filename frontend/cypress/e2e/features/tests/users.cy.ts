import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const serverUrl = 'http://localhost:5001/api';

Given('o usuário está na página {string}', (page: string) => {
  cy.visit(page);
});

Given('não existe um usuário com o email {string}', (email: string) => {
  cy.request({
    method: 'GET',
    url: `${serverUrl}/users/`,
    failOnStatusCode: false,
  }).then((response) => {
    const user = response.body.data.find((user: any) => user.email === email);
    if (user) {
      cy.request({
        method: 'DELETE',
        url: `${serverUrl}/users/${user.id}`,
        failOnStatusCode: false,
      });
    }
  });
});

Given('existe um usuário com o email {string}', (email: string) => {
  cy.request({
    method: 'GET',
    url: `${serverUrl}/users/`,
    failOnStatusCode: false,
  }).then((response) => {
    if (!response.body) {
      return;
    }
    const user = response.body.data.find((user: any) => user.email === email);
    if (user){
      return;
    }
    cy.request({
      method: 'POST',
      url: `${serverUrl}/users/`,
      body: {
        name: 'John Doe',
        email: email,
        password: '123456',
      },
      failOnStatusCode: false,
    });
  });
});

When('o usuário preenche o campo {string} com {string}', (field: string, value: string) => {
  cy.get(`#${field}`).type(value);
});

When('o usuário clica no botão {string}', (button: string) => {
  cy.contains(`${button}`).click();
});

When('o usuário clica no link {string}', (button: string) => {
  cy.contains(`${button}`).click();
});

Then('o usuário deve ser redirecionado para a página {string}', (page: string) => {
  cy.url().should("include", page);
});

Then('o usuário deve permanecer na página {string}', (page: string) => {
  cy.url().should("include", page);
});