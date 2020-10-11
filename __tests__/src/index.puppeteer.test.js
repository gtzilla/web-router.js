'use strict';

import 'expect-puppeteer'
import {describe, expect, it} from '@jest/globals';
import {WebRouter} from '../../src/index.js'
import http from 'http';
import fs from 'fs';
import path from 'path';



// Just a test for puppeteer
describe('Test Router via puppeteer', () => {
  let server;
  const current = process.cwd()
  beforeAll(async done => {
    jestPuppeteer.debug()
    try {
      server = http.createServer((req, res) => {
        const data = fs.readFileSync(path.join(current, 'dev/html/basic.html'));
        if(!data) {
          console.error("ERROR", err);
          res.writeHead(404);
          res.end();
          return;        
        }
        res.writeHead(200);
        res.end(data);
      });
      server.listen({
        port:4444
      }, async ()=>{
        await page.goto(URL, {
          waitUntil: 'domcontentloaded'
        });      
        done();
      });      
    } catch(err) {
      console.error("ERROR CAUGHT", err);
    }
  });
  afterAll(done => {
    server.close(done);
  });
  it('should be titled "DEV Testing Basic Functionality"', async () => {
    await expect(page.title()).resolves.toMatch('DEV Testing Basic Functionality');
    // page.body()
  });
});