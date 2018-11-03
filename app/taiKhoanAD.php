<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class taiKhoanAD extends Model
{
    protected $table ='users';
    protected $fillable = [ 'tenTK','password','quyen'];
    public $timestamps=false;
    public function nhanvien()
    {
    	return $this->hasOne('App\nhanVien');
    }
}
