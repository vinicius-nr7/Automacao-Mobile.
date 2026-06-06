# Qazando Mobile — Automação de UI (CodeceptJS + Appium)

Automação para o app Qazando (Android) usando CodeceptJS e Appium — arquivo principal de demonstração: `tests/integration_test.js`.

## Status atual
- `tests/integration_test.js`: 3 cenários (1 fluxo positivo + 2 logins negativos)

## Pré-requisitos
- Node.js (>=16)
- npm
- Java JDK (para Android SDK)
- Android SDK + emulador ou dispositivo físico conectado
- Appium (local ou via `npx appium`)

## Instalação
1. Instale dependências:

```bash
npm install
```

2. Inicie o Appium (se necessário):

```bash
npx appium
```

3. Abra o emulador Android ou conecte o dispositivo.

## Como executar

Executar o cenário de apresentação (arquivo único):

```bash
npx codeceptjs run tests/integration_test.js --steps
```

Opções úteis:

```bash
# executar todos os testes (se existirem outros arquivos)
npx codeceptjs run --steps

# rodar um cenário por nome
npx codeceptjs run --grep "Nome do cenário" --steps
```

## O que o teste faz
O arquivo `tests/integration_test.js` contém um fluxo enxuto para demonstração:

1. Login com `teste@teste.com` / `123456`
2. Preencher `~codigo` com `00000`
3. Preencher `~aluno` com `Vinicius Rodrigues` e salvar
4. Buscar `Vinicius Rodrigues` no campo `~search` e verificar o resultado

Também inclui dois cenários de login negativo (usuário inválido e senha inválida).

## Selectors usados
- `~email`, `~senha`, `~entrar`, `~codigo`, `~aluno`, `~search`

## Artefatos
Logs e screenshots são gravados em `output/` durante a execução.

## Configuração relevante
As configurações de execução estão em `codecept.conf.cjs` (pausas ajustadas para apresentação):
- `waitForAction`: 400 ms
- `waitForTimeout`: 6000 ms

## Problemas comuns
- Se um elemento não for encontrado, verifique se o app está na tela correta ou aumente `waitForTimeout`.
- Em caso de crash do UiAutomator2, reinicie Appium e o emulador.

## Contato
Para mudanças ou novos cenários, abra uma issue.

## Relatórios Allure

Relatórios Allure estão disponíveis para documentação dos testes e podem ser gerados/servidos localmente. Veja abaixo como gerar e visualizar.

Este projeto gera resultados do Allure em `allure-results` quando os testes são executados com o plugin habilitado.

- Executar testes (gera `allure-results`):

```bash
npm run run
```

- Servir relatório diretamente a partir dos resultados:

```bash
npm run report:serve
```

- Gerar e abrir relatório (duas etapas):

```bash
npm run report:generate
npm run report:open
```

Observação: os scripts usam `npx allure` (do pacote `allure-commandline` instalado como `devDependency`). Se preferir instalar globalmente, instale `allure-commandline` e use `allure serve` diretamente.