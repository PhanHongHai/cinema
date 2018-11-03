<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class phim extends Model
{
   protected $table="phim";
    protected $fillable = [ 'id','tenPhim','ngayKhoiChieu','noiDung','thoiLuong','trailer','poster','idTheLoai'];
    public $timestamps=false;
    public function theLoai()
    {
    	return $this->belongsTo('App\theLoai','idTL');
    }
}
