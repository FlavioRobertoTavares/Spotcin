Feature: Playlists

  Scenario: Usuario cria uma playlist com sucesso
    Given que o usuario esta na pagina "/playlists"
    When quando o usuario clicar no botão "Criar playlist"
    And preencher o nome "Minha Playlist"
    And preencher a descrição "Descrição da minha playlist"
    And clicar no botão "Salvar" 
    Then uma nova playlist chamada "Minha Playlist" deve estar visivel

  Scenario: Usuario atualiza uma playlist com sucesso
    Given que o usuario esta na pagina "/playlists"
    And que a playlist "Minha Playlist" existe
    When quando o usuario clicar na playlist "Minha Playlist"  
    And o usuario clicar no botão "Atualizar detalhes da playlist"
    And preencher a descrição "Nova desc da minha playlist"
    And clicar no botão "Salvar"
    Then o usuario ainda está na mesma pagina e a nova descrição deve ser "Nova desc da minha playlist"

  Scenario: Usuario adiciona uma música uma playlist com sucesso
    Given que o usuario esta na pagina "/playlists"
    And que a playlist "Minha Playlist" existe
    When quando o usuario clicar na playlist "Minha Playlist"
    And o usuario clicar no botão "Adicionar música"
    And preencher o nome de música "Fur elise"
    And o usuario clicar no botão "Adicionar"
    Then o usuario ainda está na mesma pagina e a música "Fur elise" deve estar visivel

  Scenario: Usuario deleta uma playlist com sucesso
    Given que o usuario esta na pagina "/playlists"
    And que a playlist "Minha Playlist" existe
    When quando o usuario clicar na playlist "Minha Playlist"
    And o usuario clicar no botão "Deletar a playlist"
    Then o usuario deve estar ná pagina "/playlists"
    And uma playlist chamada "Minha Playlist" não deve estar visivel
