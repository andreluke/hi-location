# Olá

**Nível:** 1-Iniciante

É certo que os aplicativos devem fornecer aos usuários a funcionalidade necessária para realizar alguma tarefa ou objetivo. A eficácia da funcionalidade do aplicativo é o primeiro determinante de como os usuários percebem os aplicativos que usam. No entanto, não é a única coisa que influencia a satisfação do usuário.

A Interface de Usuário e a Experiência do Usuário (UI/UX) que os desenvolvedores constroem nos aplicativos têm, no mínimo, a mesma influência sobre a percepção dos usuários em relação ao aplicativo. Pode ser uma simplificação exagerada, mas UI/UX está amplamente (mas não totalmente) relacionado à "forma" do aplicativo. A personalização é um aspecto do UX que adapta características e ações ao usuário individual. Personalizar a funcionalidade do aplicativo dessa forma visa tornar o aplicativo mais fácil e agradável de usar.

O objetivo do app Olá é usar geolocalização para obter o país do usuário, para então gerar uma saudação personalizada no idioma nativo do usuário.

### Restrições

- Os desenvolvedores devem usar o serviço [IP-API](http://ip-api.com/docs/api:json) para obter o IP do usuário.
- Os desenvolvedores devem usar o serviço [Fourtonfish](https://www.fourtonfish.com/hellosalut/hello/) para obter a saudação no idioma nativo do usuário, passando o IP do usuário.
- Os desenvolvedores devem usar a decodificação de entidades HTML para decodificar a mensagem de saudação.

## Histórias de Usuário

- [ ] O usuário pode ver um painel de login simulado contendo um campo de entrada de nome de usuário, um campo de entrada de senha e botões de 'Login' e 'Logout'.
- [ ] O usuário pode inserir um nome de login simulado no campo Nome de Usuário.
- [ ] O usuário pode inserir uma senha simulada no campo de Senha. A entrada deve ser mascarada para que o usuário veja asteriscos (`*`) para cada caractere inserido, em vez da senha em texto simples.
- [ ] O usuário pode clicar no botão 'Login' para realizar um login simulado.
- [ ] O usuário pode ver uma mensagem se um ou ambos os campos de entrada estiverem vazios e a cor da borda do(s) campo(s) com erro deve ser alterada para vermelho.
- [ ] O usuário pode ver uma mensagem de confirmação de login no formato: `<saudação-no-idioma-nativo> <nome-do-usuário> você fez login com sucesso!`
- [ ] O usuário pode clicar no botão 'Logout' para limpar os campos de entrada e qualquer mensagem anterior.
- [ ] O usuário pode ver uma nova mensagem ao sair com sucesso no formato: `Tenha um ótimo dia <nome-do-usuário>!`

## Funcionalidades Extras

- [ ] O usuário pode ver um campo de entrada de texto adicional para um código de idioma que será usado para substituir o IP obtido por geolocalização. Dica: esta é uma ótima funcionalidade para testar o aplicativo.
- [ ] O usuário pode ver informações de geolocalização adicionais após o login, incluindo pelo menos o endereço IP local, cidade, região, nome do país, código postal, longitude, latitude e fuso horário.

## Links e Recursos Úteis

- [Forma segue a função (Wikipedia)](https://pt.wikipedia.org/wiki/Forma_segue_a_função)
- [Personalização (Wikipedia)](https://pt.wikipedia.org/wiki/Personaliza%C3%A7%C3%A3o)
- [Fourtonfish](https://www.fourtonfish.com/hellosalut/hello/)
- [IP-API](http://ip-api.com/docs/api:json)

## Projetos de Exemplo

[Fourtonfish Hello World](https://fourtonfish.com/hellosalut/helloworld/)