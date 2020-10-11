'use strict';

import {WebRouter} from '../../src/index.js';

const router = new WebRouter;
router.on('/', (params)=>{
  const el = document.getElementById('container')
  el.innerHTML = 'helo';
}, {
  before:[(done,params)=>{
    console.log("first before");
    done();
  }, (done, params)=>{
    console.log("another one!", done);
    done();
  }],
  after:()=>{
    console.log("just a function works, after")
  }
});
