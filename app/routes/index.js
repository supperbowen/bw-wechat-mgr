import Router from 'koa-router';
import convert from 'koa-convert';
import KoaBody from 'koa-body';
import {getId, list, createItem, updateItem, removeItem,getFilterd} from '../controllers/indexController';
//require('./autoreply');
import {routes as autoRoutes} from './autoreply'

const router = new Router(),
    koaBody = convert(KoaBody());

    router
        .get('/users',        list)
        .get('/users/:id',    getId)
        .post('/users/',      koaBody, createItem)
        .put('/users/:id',    koaBody, updateItem)
        .delete('/users/:id', removeItem)
        .get('/usersfiltered', getFilterd);

for(var i =0 ;i< autoRoutes.length;i++){
    var route = autoRoutes[i];
    router[route.method](route.url,route.handler);
}

export function routes () { return router.routes() }
export function allowedMethods () { return router.allowedMethods() }