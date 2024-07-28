Feature: Login do usuário

Scenario: Login com sucesso
    Given o usuário está na página "/login"
    And existe um usuário com o email "fulano@email.com"
    When o usuário preenche o campo "email" com "fulano@email.com"
    And o usuário preenche o campo "password" com "123456"
    And o usuário clica no botão "Entrar"
    Then o usuário deve ser redirecionado para a página "/"

Scenario: Login com email incorreto
    Given o usuário está na página "/login"
    And não existe um usuário com o email "fulano@email.com"
    When o usuário preenche o campo "email" com "fulano@email.com"
    And o usuário preenche o campo "password" com "123456"
    And o usuário clica no botão "Entrar"
    Then o usuário deve permanecer na página "/login"
    # And o usuário deve ver a mensagem "Email ou senha inválidos"

Scenario: Login com email inválido
    Given o usuário está na página "/login"
    When o usuário preenche o campo "email" com "fulanoemail.com"
    And o usuário preenche o campo "password" com "123456"
    And o usuário clica no botão "Entrar"
    Then o usuário deve permanecer na página "/login"

Scenario: Login com senha incorreta
    Given o usuário está na página "/login"
    And não existe um usuário com o email "fulano@email.com"
    When o usuário preenche o campo "email" com "fulano@email.com"
    And o usuário preenche o campo "password" com "senha-incorreta"
    And o usuário clica no botão "Entrar"
    Then o usuário deve permanecer na página "/login"
    # And o usuário deve ver a mensagem "Email ou senha inválidos"

Scenario: Login com senha inválida
    Given o usuário está na página "/login"
    When o usuário preenche o campo "email" com "fulano@email.com"
    And o usuário clica no botão "Entrar"
    Then o usuário deve permanecer na página "/login"

Scenario: Redirecionamento para página de cadastro
    Given o usuário está na página "/login"
    When o usuário clica no link "Cadastro"
    Then o usuário deve ser redirecionado para a página "/cadastro"

Scenario: Redirecionamento para página de esqueci senha
    Given o usuário está na página "/login"
    When o usuário clica no link "Esqueceu sua senha?"
    Then o usuário deve ser redirecionado para a página "/password"