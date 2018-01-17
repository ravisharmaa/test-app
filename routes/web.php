<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/posts', 'PostsController@index');
Route::post('/create/posts', 'PostsController@store');
Route::delete('/posts/delete/{id}', 'PostsController@delete');
Route::get('/posts/edit/{id}', 'PostsController@edit');
Route::post('/posts/update', 'PostsController@update');
Route::get('/categories', 'CategoriesController@index');