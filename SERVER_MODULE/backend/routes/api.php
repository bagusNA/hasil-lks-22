<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ResponseController;
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

Route::prefix('/v1')->group(function () {
    Route::prefix('/auth')->controller(AuthController::class)->group(function() {
        Route::post('/login', 'login');
        Route::post('/logout', 'logout');
    });

    Route::middleware('auth:sanctum')->group(function () {
        Route::controller(FormController::class)->group(function () {
            Route::get('/forms', 'show');
            Route::post('/forms', 'create');

            Route::get('/forms/{form:slug}', 'detail')->missing(function () {
                return response()->json([
                   'message' => 'Form not found'
                ], 404);
            });
        });

        Route::controller(QuestionController::class)->group(function () {
            Route::post('/forms/{form:slug}/questions', 'create')->missing(function () {
                return response()->json([
                    'message' => 'Form not found'
                ], 404);
            });

            Route::delete('/forms/{form:slug}/questions/{question}', 'delete')->missing(function () {
                return response()->json([
                    'message' => 'Form not found'
                ], 404);
            });
        });

        Route::controller(ResponseController::class)->group(function () {
            Route::post('/forms/{form:slug}/responses', 'create')->missing(function () {
                return response()->json([
                    'message' => 'Form not found'
                ], 404);
            });

            Route::get('/forms/{form:slug}/responses', 'show')->missing(function () {
                return response()->json([
                    'message' => 'Form not found'
                ], 404);
            });
        });

    });
});
