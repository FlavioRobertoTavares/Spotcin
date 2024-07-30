import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

//Usuario cria uma playlist com sucesso
Given('que o usuário {string} de email {string} e senha {string} existe e está logado', (user : string, email: string, pass: string) => {
  cy.visit("/cadastro");
  cy.get('input#name').type(user); // Nome completo
  cy.get('input#email').type(email); // Email
  cy.get('input#password').type(pass); // Senha
  cy.get('input#password-confirmation').type(pass); // Confirmação da senha
  cy.get('form').submit();
  cy.wait(1000);
  cy.get('#email').type(email);
  cy.get('#password').type(pass);
  cy.get('button').contains('Entrar').click();
});
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
Given('que o usuário de email {string} e senha {string} está logado', (email: string, pass: string) => {
  cy.visit("/login");
  cy.get('#email').type(email);
  cy.get('#password').type(pass);
  cy.get('button').contains('Entrar').click();
  cy.wait(1000);
});

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
  cy.wait(1500); //Melhorar
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
  cy.wait(1500); //Melhorar
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

//

When('clicar no botão {string} sem preencher o nome', (buttonName : string) => {});
Then('um erro {string}, gerado pelo botão {string} é capturado', (error: string, name: string) => {
  cy.get('button').contains(name).click();
  cy.wait(1000);
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Request failed with status code 500')) {
      return false;
    }
    return true;
  });
});

Then('o usuario deve estar na pagina {string}', (page: string) => {
  cy.url().should('include', page);
});

Then('o usuario ainda está na mesma pagina e a música {string} não deve estar visivel', (songName: string) => {
  cy.url().should('include', '/playlist');
  cy.wait(1500); //Melhorar
  cy.get('.songs-container')
    .should('not.contain', songName);
});