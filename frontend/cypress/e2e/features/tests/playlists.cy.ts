import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

//Scenario: User creates a new playlist successfully
Given('que o usuario esta na pagina {string}', (pageName : string) => {
  cy.visit(pageName);
});

When('quando o usuario clicar no botão {string}', (buttonName : string) => {
  cy.get('button').contains(buttonName).click();
});

When('preencher o nome {string}', (playlistName: string) => {
  cy.get('#playlist-name').type(playlistName);
});

When('preencher a descrição {string}', (playlistDescription: string) => {
  cy.get('#playlist-description').type(playlistDescription);
});

When('clicar no botão {string}', (buttonName : string) => {
  cy.get('button').contains(buttonName).click();
});

Then('uma nova playlist chamada {string} deve estar visivel', (playlistName: string) => {
  cy.get('.playlists-area').should('contain', playlistName);
});


//Scenario: Usuario desiste de criar playlist
Given('1que o usuario esta na pagina {string}', (pageName : string) => {
  cy.visit(pageName);
});

When('1quando o usuario clicar no botão {string}', (buttonName : string) => {
  cy.get('button').contains(buttonName).click();
});

When('1preencher o nome {string}', (playlistName: string) => {
  cy.get('#playlist-name').type(playlistName);
});

When('1preencher a descrição {string}', (playlistDescription: string) => {
  cy.get('#playlist-description').type(playlistDescription);
});

When('1clicar no botão {string}', (buttonName : string) => {
  cy.get('button').contains(buttonName).click();
});

Then('1uma nova playlist chamada {string} não deve existir', (playlistName: string) => {
  cy.get('.playlists-area').should('not.contain', playlistName);
});