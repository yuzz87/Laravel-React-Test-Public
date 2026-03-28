<?php
use App\Http\Controllers\HelloController;
use Illuminate\Support\Facades\Route;
// view()は、Bladeファイルを表示する関数
Route::get('/', function () {
    return view('welcome');
});
// GET /hello , index method を実行
Route::get('/hello',[HelloController::class,'index']);
