<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class rapPhim extends Model
{
    protected $table="rapphim";
    protected $fillable = [ 'id','tenRap','diaChi'];
    public $timestamps=false;
    public function phongChieu(){
    	return $this->hasMany('App\phongChieu','idRap','id');
    }
}
