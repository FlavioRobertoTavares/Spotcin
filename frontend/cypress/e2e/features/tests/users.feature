Feature: Cadastro de Usuário

    Scenario: Cadastro bem-sucedido
        Given o usuário está na página "/cadastro"
        And não existe um usuário com o email "fulano@email.com"
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
        Then o usuário deve permanecer na página "/cadastro"

    Scenario: Cadastro mal-sucedido com email inválido
        Given o usuário está na página "/cadastro"
        When o usuário preenche o campo "name" com "Fulano"
        And o usuário preenche o campo "email" com "fulanoemail.com"
        And o usuário preenche o campo "password" com "123456"
        And o usuário preenche o campo "password-confirmation" com "123456"
        And o usuário clica no botão "Cadastrar"
        Then o usuário deve permanecer na página "/cadastro"

    Scenario: Cadastro mal-sucedido com email já cadastrado
        Given o usuário está na página "/cadastro"
        And existe um usuário com o email "fulano@email.com"
        When o usuário preenche o campo "name" com "Fulano"
        And o usuário preenche o campo "email" com "fulano@email.com"
        And o usuário preenche o campo "password" com "123456"
        And o usuário preenche o campo "password-confirmation" com "123456"
        And o usuário clica no botão "Cadastrar"
        Then o usuário deve permanecer na página "/cadastro"

    Scenario: Cadastro mal-sucedido com senha inválida
        Given o usuário está na página "/cadastro"
        And existe um usuário com o email "fulano@email.com"
        When o usuário preenche o campo "name" com "Fulano"
        And o usuário preenche o campo "email" com "fulano@email.com"
        And o usuário preenche o campo "password-confirmation" com "123456"
        And o usuário clica no botão "Cadastrar"
        Then o usuário deve permanecer na página "/cadastro"

    Scenario: Redirecionamento para página de login
        Given o usuário está na página "/cadastro"
        When o usuário clica no link "Já tem uma conta? Faça login aqui"
        Then o usuário deve ser redirecionado para a página "/login"

