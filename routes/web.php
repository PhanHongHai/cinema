<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('admin', function() {
    return view('logInAdmin');
});
Route::post('logInAD',['as' =>'logInAD','uses'=>'MyController@login_Ad']);
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('lienket', function() {
    $data=App\nhanVien::find(2)->taiKhoan->toArray();
    echo "<pre>";
    var_dump($data);
    echo "</pre>";
});
Route::get('phongchieu',function()
{
    $kq=App\phongChieu::find(2)->rapPhim->toArray();
    echo "<pre>";
    var_dump($kq);
    echo "</pre>";
});
/* ADMIN  */
/* QL NHAN VIEN  */
Route::post('addNhanVien',['as'=>'addNhanVien','uses'=>'MyController@themNHANVIEN']);
Route::get('listNV','MyController@getList' );
Route::get('deleteNV/{id}','MyController@deleteNhanVien');
Route::post('editNV/{id}','MyController@editNV');
/* END ADMIN QL NHAN VIEN*/

/*  QL RAP PHIM*/
Route::post('addRapPhim','MyController@themRapPhim');
Route::get('listRap','MyController@getListRap');
Route::post('editrapChild/{id}','MyController@editRap');
Route::post('deleteRap/{id}','MyController@deleteRap');
/* END RAP PHIM*/
/* QL THE LOAI*/
Route::post('addTL', 'MyController@addTheLoai');
Route::get('listTL','MyController@getListTL');
Route::post('editTL/{id}','MyController@editTL');
Route::post('deleteTL/{id}', 'MyController@deleteTL');
/* END QL THE LOAI*/
/* ql PHIM*/
Route::post('addPhim','MyController@addPhim');
Route::post('upImg','MyController@upImg');
/* END QL PHIM*/