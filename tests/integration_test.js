const { I } = inject();

Feature('Qazando App - Fluxo de apresentação');

Scenario('Login, cadastro de Vinicius Rodrigues e busca no search', ({ I }) => {
  I.waitForElement('~email', 4);
  I.fillField('~email', 'teste@teste.com');
  I.waitForElement('~senha', 4);
  I.fillField('~senha', '123456');
  I.tap('~entrar');
  I.waitForText('Código', 6);

  I.waitForElement('~codigo', 4);
  I.fillField('~codigo', '00000');
  I.waitForElement('~aluno', 4);
  I.fillField('~aluno', 'Vinicius Rodrigues');
  I.tap('Salvar');
  I.wait(0.5);

  I.waitForElement('~search', 4);
  I.tap('~search');
  I.fillField('~search', 'Vinicius Rodrigues');
  I.wait(0.5);
  I.waitForText('Vinicius Rodrigues', 6);
});

Scenario('Login negativo - usuário inválido', ({ I }) => {
  I.waitForElement('~email', 4);
  I.fillField('~email', 'usuario_incorreto@teste.com');
  I.waitForElement('~senha', 4);
  I.fillField('~senha', '123456');
  I.tap('~entrar');
  I.waitForText('Erro no login!', 5);
});

Scenario('Login negativo - senha inválida', ({ I }) => {
  I.waitForElement('~email', 4);
  I.fillField('~email', 'teste@teste.com');
  I.waitForElement('~senha', 4);
  I.fillField('~senha', 'senha_errada');
  I.tap('~entrar');
  I.waitForText('Erro no login!', 5);
});

// No hook de reset para evitar incompatibilidades com o servidor Appium
