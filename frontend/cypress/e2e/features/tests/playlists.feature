Feature: Playlists

  Scenario: User creates a new playlist successfully
    Given the user is on the playlists page
    When the user clicks the "Criar playlist" button
    And the user enters a name "Minha Playlist" in the name field
    And the user enters a description "Descrição da minha playlist" in the description field
    And the user clicks the "Salvar" button
    Then a new playlist with name "Minha Playlist" should be visible on the playlists list
