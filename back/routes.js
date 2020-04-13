const { Router } = require('express');
const { catchErrors, prepareQuery } = require('./services/query.service');

const testJSON = [
    { id: 1, realName: 'Pahom', nickname: 'Poehavshiy' },
    { id: 2, realName: 'Yepiphan', nickname: 'Bratok' },
    { id: 3, realName: 'Osmolovskiy', nickname: 'Captain' },
    { id: 4, realName: 'Maslaev', nickname: 'Polkovnick' },
    { id: 5, realName: 'Baskova', nickname: null }
]

module.exports = Router()
    .get('/', (_, res) => res.json({ message: 'Hello Bratok!' }))
    .get('/test', ...catchErrors(({ query }, res) => {
        query = prepareQuery(query)
        console.log(query);
        if (query.msg !== 'hi') 
            throw { status: 400, error: "You didn't say hi!" };
        res.json({ message: 'Hi, mate.' })
    }))
