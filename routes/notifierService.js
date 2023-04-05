const express = require('express');
const router = express.Router()
const apiAdapter = require('./apiAdapter')

const verifyAppKey = require('../config/security/verifyAppKey')

const BASE_URL = 'https://dlci.idevoc.com.br/api/dlci/'
const api = apiAdapter(BASE_URL);

router.post('/v1/notify/pix', (req, res, next) => {

    res.send(req.body)

    /*
        #swagger.description = 'Notify Pix.'
        #swagger.produces = ['application/json']
        #swagger.tags = ['Notify Payment']
    */

    /*    #swagger.parameters['Request'] = {
                in: 'body',
                schema: {
                    $sequence: 'string'
                }
        } */

    // api.post(BASE_URL+'/ci', req.body).then(resp => {
    //     res.send(resp.data)
    // })
});

module.exports = router;
