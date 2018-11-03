<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class nhanVien extends Model
{
    protected $table="nhanvien";
    protected $fillable=['id','ten','gioitinh','diachi','tenTaiKhoan'];
     public $timestamps=false;
     public function taiKhoan()
     {
     	return $this->belongsTo('App\taiKhoanAD','tenTaiKhoan','tenTK');
     }
}
