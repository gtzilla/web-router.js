
import _ from 'underscore'

export default {
  preset: "jest-puppeteer",
  verbose:true,
  globalSetup: "jest-environment-puppeteer/setup",
  globalTeardown: "jest-environment-puppeteer/teardown",  
  testEnvironment: 'jest-environment-puppeteer',
  transform:{},
  globals:{
    URL: "http://localhost:4444",
    _
  }
}