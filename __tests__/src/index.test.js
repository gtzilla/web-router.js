``
import 'expect-puppeteer'
import {describe, expect, it} from '@jest/globals';
import {WebRouter} from '../../src/index.js'
import http from 'http';
import fs from 'fs';
import path from 'path';


describe('WebRouter Basic', ()=>{
  beforeAll(async ()=>{
    WebRouter.autoListen = false;
  })  
  it('Can be imported', ()=>{
    expect(WebRouter).toBeTruthy()
  })
  it('Public API Methods', ()=>{
    const router = new WebRouter('/', null);
    expect(_.isFunction(router.on)).toBeTruthy();
    expect(_.isFunction(router.off)).toBeTruthy();
    expect(_.isFunction(router.updatePageLinks)).toBeTruthy();
    expect(_.isFunction(router.resolve)).toBeTruthy();
    expect(_.isFunction(router.navigate)).toBeTruthy();
    expect(_.isFunction(WebRouter.setRoot)).toBeTruthy();
    expect(WebRouter.root).toBe('/');
  });
});

describe('WebRouter Root value', ()=>{
  beforeAll(()=>{
    WebRouter.autoListen = false;
  })  
  it('can be set to default', ()=>{
    const router = new WebRouter('/', null);
    expect(router.root).toBe('/')
  });
  it('can be set to any value, string', ()=>{
    const router = new WebRouter('/something', null);
    expect(router.root).toBe('/something');
    WebRouter.setRoot('/another-value')
    expect(router.root).toBe('/another-value');
  });
  it('can be set to any value, null', ()=>{
    const router = new WebRouter;
    expect(router.root).toBe('/');
  });
});

describe('WebRouter `.on()`', ()=>{
  beforeAll(()=>{
    WebRouter.autoListen = false;
  });
  it('assigns routes', ()=>{
    const router = new WebRouter;
    router.on('/', ()=>{ return true; }, {});
    router.on('/not-true', ()=>{ return false; }, {});
    const _routes = WebRouter.routes;
    const found = _routes['/'];
    const foundNotTrue = _routes['/not-true'];

    expect(router.all).toEqual(_routes)
    expect(router.all['/']).toEqual(found)
    expect(found).toBeTruthy();
    expect(foundNotTrue).toBeTruthy();
    expect(_.isFunction(found.method)).toBeTruthy();
    expect(found.method()).toBeTruthy();
    expect(foundNotTrue.method()).toBeFalsy();
  });
});

describe('WebRouter `.off()`', ()=>{
  beforeAll(()=>{
    WebRouter.autoListen = false;
  });
  it('Clears all routes when no args', ()=>{
    const router = new WebRouter;
    router.on('/', ()=>{});
    router.on('/something', ()=>{});
    const _routes = WebRouter.routes;
    const found = _routes['/'];
    expect(found).toBeTruthy();
    router.off();
    
    expect(WebRouter.routes).toBeTruthy();
    expect(WebRouter.routes['/']).toBeFalsy();
  });
})

