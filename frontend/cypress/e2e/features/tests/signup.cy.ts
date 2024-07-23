import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('o usuário está na página {string}', (page: string) => {
  cy.visit(page);
});

When('o usuário preenche o campo {string} com {string}', (field: string, value: string) => {
  cy.get(`#${field}`).type(value);
});

When('o usuário clica no botão {string}', (button: string) => {
  cy.contains(`${button}`).click();
});

Then('o usuário deve ser redirecionado para a página {string}', (page: string) => {
  cy.url().should("include", page);
});

Then('o usuário deve permanecer na página {string}', (page: string) => {
  cy.url().should("include", page);
});