'use strict';

import { jest, describe, expect, it } from '@jest/globals';
import { WebRouter } from '../../src/index.js';
// eslint-disable-next-line
import _ from 'underscore';

afterEach(() => {
  const router = new WebRouter();
  router.off();
});

describe('WebRouter Basic', () => {
  beforeAll(async () => {
    WebRouter.autoListen = false;
  });
  afterEach(() => {
    const router = new WebRouter();
    router.off();
  });
  it('Can be imported', () => {
    expect(WebRouter).toBeTruthy();
  });
  it('Public API Methods', () => {
    const router = new WebRouter('/', null);
    expect(_.isFunction(router.on)).toBeTruthy();
    expect(_.isFunction(router.off)).toBeTruthy();
    expect(_.isFunction(router.updatePageLinks)).toBeTruthy();
    expect(_.isFunction(router.resolve)).toBeTruthy();
    expect(_.isFunction(router.navigate)).toBeTruthy();
    expect(_.isFunction(router.notFound)).toBeTruthy();
    expect(_.isFunction(WebRouter.setRoot)).toBeTruthy();
    expect(WebRouter.root).toBe('/');
  });
  it('can chain on and resolve', () => {
    const router = new WebRouter();
    expect.assertions(1);
    router.on('/f001', () => {
      expect(true).toBeTruthy();
    }).on('/f002').resolve('/f001');
  });
  it('can handle not found with handler', ()=>{
    expect.assertions(1);
    const router = new WebRouter();
    expect.assertions(1);
    router.notFound(()=>{
      expect(true).toBeTruthy();
    })
    router.on('/f001', () => {
      expect(true).toBeTruthy();
    }).on('/not-found').resolve('/f001');
  });
});

describe('WebRouter Root value', () => {
  beforeAll(() => {
    WebRouter.autoListen = false;
    delete window.location;
    window.location = {
      reload: jest.fn()
    };
  });
  afterEach(() => {
    const router = new WebRouter();
    router.off();
  });
  it('can be set to default', () => {
    const router = new WebRouter('/', null);
    expect(router.root).toBe('/');
  });
  it('can be set to any value, string', () => {
    const router = new WebRouter('/something', null);
    expect(router.root).toBe('/something');
    WebRouter.setRoot('/another-value');
    expect(router.root).toBe('/another-value');
  });
  it('can be set to any value, null', () => {
    const router = new WebRouter();
    expect(router.root).toBe('/');
  });
});

describe('WebRouter `.on()`', () => {
  beforeAll(() => {
    WebRouter.autoListen = false;
  });
  afterEach(() => {
    const router = new WebRouter();
    router.off();
  });
  it('assigns routes', () => {
    const router = new WebRouter();
    router.on('/', () => { return true; }, {});
    router.on('/not-true', () => { return false; }, {});
    const _routes = WebRouter.routes;
    const found = _routes['/'];
    const foundNotTrue = _routes['/not-true'];
    expect(router.all).toEqual(_routes);
    expect(router.all['/']).toEqual(found);
    expect(found).toBeTruthy();
    expect(foundNotTrue).toBeTruthy();
    expect(_.isFunction(found.method)).toBeTruthy();
    expect(found.method()).toBeTruthy();
    expect(foundNotTrue.method()).toBeFalsy();
  });
});

describe('WebRouter `.off()`', () => {
  beforeAll(() => {
    WebRouter.autoListen = false;
  });
  afterEach(() => {
    const router = new WebRouter();
    router.off();
  });
  it('Clears all routes when no args', () => {
    const router = new WebRouter();
    router.on('/', () => {});
    router.on('/something', () => {});
    const _routes = WebRouter.routes;
    const found = _routes['/'];
    expect(found).toBeTruthy();
    router.off();
    expect(WebRouter.routes).toBeTruthy();
    expect(WebRouter.routes['/']).toBeFalsy();
  });
});

describe('WebRouter .navigate() adds to history length', () => {
  /**
    This tests relies on there only
    being 1 `it` and is brittle
  */
  let startLength;
  let historyPopped = false;
  beforeAll(() => {
    WebRouter.autoListen = true;
    startLength = window.history.length;
    window.onpopstate = function (evt) {
      historyPopped = true;
    };
  });
  afterEach(() => {
    const router = new WebRouter();
    router.off();
  });
  it('Added to history', () => {
    const router = new WebRouter();
    expect(window.history.length).toEqual(1);
    router.navigate('/foo1');
    const event = document.createEvent('CustomEvent');
    event.state = null;
    event.initEvent('popstate', true, true);
    window.dispatchEvent(event);
    expect(window.history.length).toEqual(2);
    expect(window.history.length).toEqual(startLength + 1);
    expect(historyPopped).toBeTruthy();
  });
  afterAll(() => {
    startLength = 0;
  });
});

describe('WebRouter .resolve() routes', () => {
  beforeAll(() => {
    delete window.location.pathname;
    window.location.pathname = '/foo1';
  });
  afterEach(() => {
    const router = new WebRouter();
    router.off();
  });
  it('resolves to path', () => {
    let count = 0;
    const router = new WebRouter();
    router.on('/foo1', () => {
      count = 1;
      expect(count).toEqual(1);
    });
    router.resolve();
  });
});

describe('WebRouter after hook', () => {
  beforeAll(() => {
    delete window.location.pathname;
    window.location.pathname = '/foo1';
  });
  afterEach(() => {
    const router = new WebRouter();
    router.off();
  });
  it('can accept array', () => {
    expect.assertions(5);
    let count = 0;
    const router = new WebRouter();
    expect(window.location.pathname).toEqual('/foo1');
    router.on('/foo1', () => {
      expect(true).toBeTruthy();
      count += 1;
      expect(count).toEqual(1);
    }, {
      after: [(done, params) => {
        expect(true).toBeTruthy();
        done();
      }, (done, params) => {
        expect(true).toBeTruthy();
        done();
      }]
    });
    router.resolve();
  });
  it('can terminate call chain when array', () => {
    expect.assertions(2);
    const router = new WebRouter();
    router.on('/foo1', () => {
      expect(true).toBeTruthy();
    }, {
      after: [(done, params) => {
        expect(true).toBeTruthy();
        done(false);
      }, (done, params) => {
        // should never fire
        expect(true).toBeTruthy();
        expect(false).toBeTruthy();
        done(true);
      }]
    });
    router.resolve();
  });
  it('can accept single function', () => {
    expect.assertions(4);
    let count = 0;
    const router = new WebRouter();
    expect(window.location.pathname).toEqual('/foo1');
    router.on('/foo1', () => {
      expect(true).toBeTruthy();
      count += 1;
      expect(count).toEqual(1);
    }, {
      after: (done, params) => {
        expect(true).toBeTruthy();
        done();
      }
    });
    router.resolve();
  });
});

describe('WebRouter before hook method', () => {
  beforeAll(() => {
    delete window.location.pathname;
    window.location.pathname = '/foo1';
  });
  afterEach(() => {
    const router = new WebRouter();
    router.off();
  });
  it('can accept array', () => {
    let count = 0;
    expect.assertions(2);
    const router = new WebRouter();
    router.on('/foo1', () => {
      expect(count).toEqual(2);
      expect(true).toEqual(true);
    }, {
      before: [(done, params) => {
        count += 1;
        done();
      }, (done, params) => {
        count += 1;
        done();
      }]
    });
    router.resolve();
  });
  it('can accept a single function', () => {
    const router = new WebRouter();
    router.on('/foo1', () => {}, {
      before: (done, params) => {
        done();
      }
    });
  });
  it('Uses RegExp and can accept a single function', () => {
    let count = false;
    expect.assertions(2);
    const router = new WebRouter();
    router.on(/\/foo([1-9]{1})/, () => {
      expect(count).toEqual(true);
    }, {
      before: (done, params) => {
        count = true;
        done();
      }
    });
    router.resolve();
    expect(count).toEqual(true);
  });

  it('can reject from before with false argument to done', () => {
    expect.assertions(2);
    const router = new WebRouter();
    expect(window.location.pathname).toEqual('/foo1');
    router.on('/foo1', () => {
      // shouldn't be fired
      expect(false).toEqual(true);
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    }, {
      before: (done, params) => {
        expect(true).toBeTruthy();
        done(false);
      }
    });
    router.resolve();
  });
  it('works with after hook', () => {
    expect.assertions(4);
    const router = new WebRouter();
    router.on('/foo1', () => {
      expect(true).toBeTruthy();
    }, {
      before: (done, params) => {
        expect(true).toBeTruthy();
        expect([]).toBeTruthy();
        done();
      },
      after: (done, params) => {
        expect(true).toBeTruthy();
        done();
      }
    });
    router.resolve();
  });
  it('can cancel call chain and route', () => {
    const router = new WebRouter();
    expect.assertions(2);
    router.on('/f001', () => {
      expect(false).toBeTruthy();
    }, {
      before: [(done, params) => {
        expect(true).toBeTruthy();
        done();
      }, (done, params) => {
        expect(true).toBeTruthy();
        done(false);
      }, (done, params) => {
        expect(false).toBeTruthy();
        done(false);
      }]
    });
    router.resolve('/f001');
  });
});

describe('RegExp Route Matching', () => {
  beforeAll(() => {
    delete window.location.pathname;
    window.location.pathname = '/foo/america/plain';
  });
  afterEach(() => {
    const router = new WebRouter();
    router.off();
  });
  it('matches basic regexp', () => {
    const router = new WebRouter();
    expect.assertions(2);
    router.on(/\/(foo)\/([a-z]{1,})\/plain/, (arg1, arg2) => {
      expect(arg1).toEqual('foo');
      expect(arg2).toEqual('america');
    });
    router.resolve();
  });

  it('can match multiple regexp groups', () => {
    const router = new WebRouter();
    expect.assertions(4);
    router.on(/\/foo\/(bar|car)\/(bat)\/([^/]{1,})/, (arg1, arg2, arg3) => {
      expect(true).toBeTruthy();
      expect(arg1).toEqual('bar');
      expect(arg2).toEqual('bat');
      expect(arg3).toEqual('1234456678-123456');
    });
    router.resolve('/foo/bar/bat/1234456678-123456');
  });

  it("isn't greedy", () => {
    expect.assertions(2);
    const router = new WebRouter();
    router.on(/\/foo\/(bar|car)\/(bat)\/([^/]{1,})/, (arg1, arg2) => {
      expect(arg1).toEqual('bar');
      expect(arg2).toEqual('bat');
    });
    router.on(/\/foo\/(bar|car)\/(bat)\/([^/]{1,})\/plain/, (arg1, arg2, arg3) => {
      expect(true).toBeTruthy();
      expect(arg1).toEqual('bar');
      expect(arg2).toEqual('bat');
      expect(arg3).toEqual('1234456678-123456');
    });
    router.resolve('/foo/bar/bat/1234456678-123456');
  });

  it('matches regexp, variants', () => {
    const router = new WebRouter();
    expect.assertions(2);
    router.on(/\/(cat)\/normal\/([a-z]{1})\/normal\/plain/, (arg1, arg2) => {
      expect(arg1).toEqual('bat');
      expect(arg2).toEqual('c');
    });
    router.on(/\/(bar|bat)\/normal\/([a-z]{1})\/normal\/plain/, (arg1, arg2) => {
      expect(arg1).toEqual('bat');
      expect(arg2).toEqual('c');
    });
    router.resolve('/bat/normal/c/normal/plain');
  });
});

describe('WebRouter transforms /foo/:someValue/:anotherValue', () => {
  beforeAll(() => {
    delete window.location.pathname;
    window.location.pathname = '/foo/america/purple';
  });
  afterEach(() => {
    const router = new WebRouter();
    router.off();
  });
  it('transforms two :arg into RegExp', () => {
    expect.assertions(5);
    const router = new WebRouter();
    expect(window.location.pathname).toEqual('/foo/america/purple');
    router.on('/foo/:someValue/:anotherValue', ({ someValue, anotherValue }) => {
      expect(someValue).toBeTruthy();
      expect(someValue).toEqual('america');
      expect(anotherValue).toBeTruthy();
      expect(anotherValue).toEqual('purple');
    });
    router.resolve();
  });
});

describe('WebRouter transforms colon prefix into RegExp', () => {
  beforeAll(() => {
    delete window.location.pathname;
    window.location.pathname = '/foo/america/purple/plain';
  });
  afterEach(() => {
    const router = new WebRouter();
    router.off();
  });
  it('transforms two :arg into RegExp', () => {
    expect.assertions(5);
    const router = new WebRouter();
    expect(window.location.pathname).toEqual('/foo/america/purple/plain');
    router.on('/foo/:someValue/:anotherValue/plain', ({ someValue, anotherValue }) => {
      expect(someValue).toBeTruthy();
      expect(someValue).toEqual('america');
      expect(anotherValue).toBeTruthy();
      expect(anotherValue).toEqual('purple');
    });
    router.resolve();
  });

  it('Treats argument passed to resolve like window.location.pathname', () => {
    const router = new WebRouter();
    expect.assertions(3);
    router.on('/:argumentOne/:argumentTwo/:argumentThree/plain', ({ argumentOne, argumentTwo, argumentThree }) => {
      expect(argumentOne).toEqual('one');
      expect(argumentTwo).toEqual('two');
      expect(argumentThree).toEqual('three');
    });
    router.resolve('/one/two/three/plain');
  });
});

describe('WebRouter transforms /foo/:someValue ', () => {
  beforeAll(() => {
    delete window.location.pathname;
    window.location.pathname = '/foo/america';
  });
  afterEach(() => {
    const router = new WebRouter();
    router.off();
  });
  it('transforms one :arg into RegExp', (...args) => {
    expect.assertions(4);
    const router = new WebRouter();
    expect(args).toBeTruthy();
    expect(window.location.pathname).toEqual('/foo/america');
    router.on('/foo/:someValue', ({ someValue }) => {
      expect(someValue).toBeTruthy();
      expect(someValue).toEqual('america');
    });
    router.resolve();
  });
});

describe('Routes in Constructor', () => {
  it('Can accept a collection of routes', () => {
    expect.assertions(1);
    const router = new WebRouter(null, {
      '/foo1': () => {
        expect(true).toBeTruthy();
      },
      '/foo2': () => {
        expect(true).toBeTruthy();
      }
    });
    router.resolve('/foo1');
  });
});

describe('WebRouter updatePageLinks', () => {
  beforeAll(() => {
    WebRouter.autoListen = false;
    // WebRouter.debug = true;
  });
  it('can bind to DOM', () => {
    const el = document.createElement('a');
    el.setAttribute('href', '/foo123');
    el.setAttribute('data-navigo', 'true');
    document.body.appendChild(el);
    expect.assertions(2);
    const router = new WebRouter();
    router.on('/foo12', () => {
      expect(true).toBeTruthy();
      router.updatePageLinks(() => {
        expect(true).toBeTruthy();
      });
      const event = document.createEvent('CustomEvent');
      event.initEvent('click', true, true);
      const el = document.querySelector('a');
      el.dispatchEvent(event);
    });
    router.resolve('/foo12');
  });
});
