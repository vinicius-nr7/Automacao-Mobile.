exports.config = {
  noGlobals: true,
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: 'C:\\Users\\Vinicius Rodrigues\\Desktop\\app-release.apk',
      platformName: 'Android',
      deviceName: 'Pixel 4',
      automationName: 'UiAutomator2', // obrigatório
      host: '127.0.0.1',
      port: 4723,
      path: '/',
      // pausa automática entre ações (ms) para gravação de vídeo com bons movimentos
      waitForAction: 400,
      waitForTimeout: 6000,
      desiredCapabilities: {
        platformName: 'Android',
        deviceName: 'Pixel 4',
        automationName: 'UiAutomator2',
        appPackage: 'com.qazandoapp',
        appActivity: 'com.qazandoapp.MainActivity'
      }
    }
  },
  include: {
    I: require('./steps_file.js') // garante que o objeto I seja injetado (carrega via require para Windows)
  },
  // Note: Allure reporting configured via mocha reporter (see package.json scripts)
  name: 'qazando-mobile'
};
