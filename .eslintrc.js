module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    extends: [
        'plugin:react/recommended',
        'semistandard'
    ],
    settings:{
        react:{
            version:'detect'
        }
    },    
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": false
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "globals":{
        page: true,
        browser: true,
        context: true,        
        "_": 'readonly',
        "jestPuppeteer": true,
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};