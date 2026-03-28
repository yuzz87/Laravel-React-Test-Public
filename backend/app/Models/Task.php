<?php
// Task モデルは、tasks テーブルを Laravel から扱うための窓口
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    //fillable = 登録してよいカラム一覧
    // クラス内と子クラスだけ使える
    protected $fillable = [
        'title',
        'is_done',
    ];
}
