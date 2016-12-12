var express = require('express');
var router = express.Router();

var Validators = require('./validators');
var Forms = require('./forms');
var Controllers = require('./controllers');

module.exports = function () {
    router.post('/signup',
        Forms.Create,
        Validators.isUnique,
        Controllers.Create
    );

    router.post('/login',
        Forms.Login,
        Validators.Authenticate,
        Controllers.SignTokens,
        Controllers.SendTokens
    );

    router.get('/refresh',
        Forms.Refresh,
        Validators.isRefreshToken,
        Validators.existsToken,
        Controllers.SignTokens,
        Controllers.SendTokens
    );

    return router;
};
