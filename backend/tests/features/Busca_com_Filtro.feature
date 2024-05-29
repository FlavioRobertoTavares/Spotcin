Essa feature serve para o usuário conseguir pesquisar músicas na plataforma a partir de determinados filtros, sejam eles gêneros musicais, artistas, nome de banda e nome da música.

Cenário: Adicionar filtros
Given: O usuário “Ryei” está logado
And:  “Ryei“ está na página “busca com filtros”
When: “Ryei” seleciono a opção “adicionar um filtro”
Then: Uma lista com as opções de gêneros musicais aparece “Rock”, “Pop”, “Metal”, “Folk”, “Clássica”
When:  “Ryei“ seleciona o gênero “Folk“ entre as opções
And: Seleciona a opção “confirmar“
Then:  “Ryei“ consegue ver o gênero “Folk“ na seção “Filtros“

Cenário: Remover filtros
Given: O usuário “Ryei” está logado
And: “Ryei“ está na página “busca com filtros”
And: ”Ryei” já adicionou o filtro “Folk”
When: ”Ryei” seleciona a opção “remover filtros”
And:  seleciona o filtro “Folk”
Then: O filtro “Folk” não está mais na seção “Filtros“

Cenário: Confirmação de busca
Given: O usuário “Ryei” está logado
And: está na página “busca com filtros”
And: ”Ryei” já adicionou o filtro “Folk”
When: “Ryei” seleciona a opção “buscar”
Then: Deve aparecer as músicas “Pink Moon-Nick Drake” e “Ballad of Big Nothing-Elliott Smith” condizentes com o filtro “Folk”

Cenário: Busca por nome de banda
Given O usuário "Ryei" está logado
When "Ryei" digita "coldplay" na barra de pesquisa
And seleciona a opção buscar
Then Devem aparecer ás músicas "Yellow", "Fix You" e "Adventure of a Lifetime"
//Acrescimo para a questão 7.e do roteiro