import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

//Usuario cria uma playlist com sucesso
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


//Usuario atualiza uma playlist com sucesso
Given('que a playlist {string} existe', (playlistName: string) => {
  cy.get('.playlists-area').should('contain', playlistName);
});

When('quando o usuario clicar na playlist {string}', (playlistName: string) => {
  cy.get('.playlists-area')         
  .find('span')                  
  .contains(playlistName)        
  .click();                       
});

When('o usuario clicar no botão {string}', (buttonName: string) => {
  if(buttonName == "Adicionar"){cy.get('#add-song-button').click();}
  else{cy.get('button').contains(buttonName).click();}
});

Then('o usuario ainda está na mesma pagina e a nova descrição deve ser {string}', (newDescription: string) => {
  cy.url().should('include', '/playlist');
  cy.wait(2000); //Melhorar
  cy.get('.playlist-details')
  .find('p')                           
  .contains('Descrição: ')            
  .invoke('text')                     
  .then(text => {
    const descriptionText = text.replace('Descrição: ', '').trim();
    expect(descriptionText).to.equal(newDescription);
  });
});

//Usuario adiciona uma música uma playlist com sucesso
When('preencher o nome de música {string}', (songtName: string) => {
  cy.get('#song-name').type(songtName);                   
});

Then('o usuario ainda está na mesma pagina e a música {string} deve estar visivel', (songName: string) => {
  cy.url().should('include', '/playlist');
  cy.wait(2000); //Melhorar
  cy.get('.songs-container')
  .contains('.song-item', songName) 
});

//Usuario deleta uma playlist com sucesso
Then('o usuario deve estar ná pagina {string}', (page: string) => {
  cy.url().should('include', page);
});

Then('uma playlist chamada {string} não deve estar visivel', (playlistName: string) => {
  cy.get('.playlists-area').should('not.contain', playlistName);
});