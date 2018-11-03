<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class phongChieu extends Model
{
     protected $table="phongchieu";
    protected $fillable = [ 'id','soLuongGhe','idRap'];
    public $timestamps=false;
    public function rapPhim()
    {
    	return $this->belongsTo('App\rapPhim','idRap','id');
    }
  
}
