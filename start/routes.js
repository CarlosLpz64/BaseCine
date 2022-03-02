'use strict'

const { RouteGroup } = require('@adonisjs/framework/src/Route/Manager');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


Route.group(() => {
  //AUTH
  Route.post('/usuarios/login', 'UserController.login');
  //CREATE
  Route.post('/usuarios/registro', 'UserController.store');
  //READ
  Route.get('/usuarios/index', 'UserController.index');
  //UPDATE
  Route.patch('/usuarios/update/:id', 'UserController.update');
  //DELETE
  Route.delete('/usuarios/delete/:id', 'UserController.delete');
}).prefix('api/v1/');
