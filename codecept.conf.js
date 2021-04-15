exports.config = {
  tests: './Src/Tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://fpsgo_qa.ultimatesoftware.com/login',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },

  "mocha": {
"reporterOptions": {
   "reporterDir": "Output/results.xml"
}

  },
  bootstrap: null,
  mocha: {},
  name: 'FPS-Go-test'
}