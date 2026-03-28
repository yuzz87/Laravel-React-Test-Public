<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function index(){

        // json 形式,PHP配列
        return response()->json([
            'message' => 'This is routes/hello => HelloController => Hello Page!'
        ]);
    }
}
