<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route group for guest only
Route::group(['middleware' => ['guest:api']], static function () {
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('login', 'Auth\LoginController@login');
});

Route::group(['middleware' => ['auth:api']], static function () {
    Route::get('me', 'User\MeController@getMe');
    Route::post('logout', 'Auth\LoginController@logout');
});
/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
