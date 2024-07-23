Feature: Playlists

  Scenario: Usuario cria uma playlist com sucesso
    Given que o usuario esta na pagina "/playlists"
    When quando o usuario clicar no botão "Criar playlist"
    And preencher o nome "Minha Playlist"
    And preencher a descrição "Descrição da minha playlist"
    And clicar no botão "Salvar" 
    Then uma nova playlist chamada "Minha Playlist" deve estar visivel

  Scenario: Usuario desiste de criar playlist
    Given 1que o usuario esta na pagina "/playlists"
    When 1quando o usuario clicar no botão "Criar playlist"
    And 1preencher o nome "Cancelando"
    And 1preencher a descrição "Descrição da minha playlist"
    And 1clicar no botão "Cancelar" 
    Then 1uma nova playlist chamada "Cancelando" não deve existir
