

# simpleRoute.js

This is a fork of the project WebRouter https://github.com/krasimir/navigo
with the following improvements

1. Remove Rollup
2. Remove babel
3. Fix a bug in `before` hook that caused it to be called twice
4. Implement Jest 
5. Implement Testing-library/@react with Test Cases
6. Implement testing with Puppeteer (direct API access)
7. Rely on import/export
8. Sets type module

It retires the hash routing.



# Documentation


## Basic `.on`

```javascript
const route = new WebRouter
route.on('/somepage/:myParam', (myParam, params)=>{
  console.log('Page loaded', myParam);
});


```

## Hooks

```javascript
route.on('/', ()=>{}, {
  before:(done, params)=>{
    // before anything, call done();
  },
  after:()=>{
    // immediately after render
  },
  leave:()=>{
    // on user navigate away
  }
})

```





#### Developing

Configuration For Testing

It is advised to use node version 14.5.0

```
nvm install 14.5.0
```

