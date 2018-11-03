<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class theLoai extends Model
{
    protected $table="theloai";
    protected $fillable=["id","tenTL"];
    public $timestamps=false;
    public function phim()
    {
    	return $this->hasMany('App\phim','idTL');
    }
}
