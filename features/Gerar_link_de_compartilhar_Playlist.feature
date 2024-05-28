Essa feature serve para o usuário ser capaz de gerar um link para compartilhar sua Playlist própria com outros usuários.

Cenário: Gerar link de compartilhamento
Given: O usuário “Eu“ está logado
And: “Eu“ acessa a página “Playlists“
Then: “Eu“ Consegue visualizar as suas playlists “Carros e motos” e “Country”
When: “Eu” Seleciona a playlist “Country”
And: “Eu” seleciona a opção “compartilhar”
Then: O link de compartilhamento da playlist “Country” é gerado
//teste