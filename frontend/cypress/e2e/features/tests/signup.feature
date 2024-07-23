Feature: Cadastro de Usuário

    Scenario: Cadastro bem-sucedido
        Given o usuário está na página "/cadastro"
        When o usuário preenche o campo "name" com "Fulano"
        And o usuário preenche o campo "email" com "fulano@email.com"
        And o usuário preenche o campo "password" com "123456"
        And o usuário preenche o campo "password-confirmation" com "123456"
        And o usuário clica no botão "Cadastrar"
        Then o usuário deve ser redirecionado para a página "/login"

    Scenario: Cadastro mal-sucedido com senhas diferentes
        Given o usuário está na página "/cadastro"
        When o usuário preenche o campo "name" com "Fulano"
        And o usuário preenche o campo "email" com "fulano@email.com"
        And o usuário preenche o campo "password" com "123456"
        And o usuário preenche o campo "password-confirmation" com "654321"
        And o usuário clica no botão "Cadastrar"
        Then o usuário deve ser permanecer na página "/cadastro"
