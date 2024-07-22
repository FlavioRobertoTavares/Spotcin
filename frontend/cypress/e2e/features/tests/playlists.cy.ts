import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the user is on the playlists page', () => {
  cy.visit('/playlists'); // Atualize o caminho se necessário
});

When('the user clicks the "Criar playlist" button', () => {
  cy.get('button').contains('Criar playlist').click();
});

When('the user enters a name {string} in the name field', (playlistName: string) => {
  cy.get('#playlist-name').type(playlistName);
});

When('the user enters a description {string} in the description field', (playlistDescription: string) => {
  cy.get('#playlist-description').type(playlistDescription);
});

When('the user clicks the "Salvar" button', () => {
  cy.get('button').contains('Salvar').click();
});

Then('a new playlist with name {string} should be visible on the playlists list', (playlistName: string) => {
  cy.get('.playlists-area').should('contain', playlistName);
});
