 var app = angular.module('myApp',['ngRoute','ngMaterial']).constant('API', 'http://localhost:8080/PROJECT/Cinema/public/')
 app.controller('MyController',  function($scope){

 })

 app.config(function ($routeProvider,$locationProvider) {
 	var urlLocal="http://localhost:8080/PROJECT/Cinema/resources/views/";
 	$routeProvider.
 	when('/',{
 		templateUrl:urlLocal+'admin/adIndex.php',
 	}).
 	when('/nvAdd',{
 		templateUrl:urlLocal+'admin/nhanVien/nhanVien_add.html',
 		controller:'themNhanVien'
 	})
 	.when('/nvEdit',{
 		templateUrl:urlLocal+'admin/nhanVien/nhanVien_edit.html',
 		controller:'suaNhanVien'
 	})
 	.when('/rapAdd',{
 		templateUrl:urlLocal+'admin/rapChieu/rapChieu_add.html',
 		controller:'themRapChieu'
 	})
 	.when('/rapEdit',{
 		templateUrl:urlLocal+'admin/rapChieu/rapChieu_edit.html',
 		controller:'suaRapChieu'
 	})
 	.when('/phimAdd',{
 		templateUrl:urlLocal+'admin/phim/phim_Add.html',
 		controller:'ql_Phim'
 	})
 	.when('/phimEdit', {
 		templateUrl:urlLocal+ 'admin/phim/phim_Edit.html',
 		controller: 'ql_Phim'
 	})
 	.when('/tl',{
 		templateUrl:urlLocal+'admin/theLoai/theLoaiView.html',
 		controller:'theloai'
 	})

 	.otherwise({ redirectTo: '/' })
 });
 app.directive('fileInput', function ($parse) {
 	return {
 		link: function ($scope, $iElement, $iAttrs) {
 			$iElement.on("change",function (event) {
 				var files = event.target.files;
 				console.log(files[0].name);
 				$parse($iAttrs.fileInput).assign($iElement[0].files);
 				$scope.$apply();
 			})
 		}
 	};
 })
 app.controller('themNhanVien',function ($scope,$http,$mdToast) {
 	$scope.addInfo=function(){
 		var urlCon='http://localhost:8080/PROJECT/Cinema/public/addNhanVien';
 		var data =$.param({
 			ten:$scope.nameNV,
 			gioitinh:$scope.gioiTinh,
 			quyen:$scope.phanQuyen,
 			diaChi:$scope.diaChi,
 			taiKhoan:$scope.taiKhoan,
 			pass:$scope.pass
 		});
 		console.log(data);
 		var config={
 			headers:{
 				'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
 			}
 		}
 		$http.post(urlCon,data,config)
 		.then(function(res){
 			if(res.data =='addSucess')	{	
 				$scope.showMessg('Thêm thành công');
 			}
 		},function(er){
 			$scope.showMessg('Thêm thất bại');
 			console.log(er.data);
 			
 		})
 	}
 	/* hien thi thong bao */
 	var last = {
 		bottom: true,
 		top: false,
 		left: false,
 		right: true
 	};

 	$scope.toastPosition = angular.extend({},last);

 	$scope.getToastPosition = function() {
 		sanitizePosition();

 		return Object.keys($scope.toastPosition)
 		.filter(function(pos) { return $scope.toastPosition[pos]; })
 		.join(' ');
 	};

 	function sanitizePosition() {
 		var current = $scope.toastPosition;

 		if ( current.bottom && last.top ) current.top = false;
 		if ( current.top && last.bottom ) current.bottom = false;
 		if ( current.right && last.left ) current.left = false;
 		if ( current.left && last.right ) current.right = false;

 		last = angular.extend({},current);
 	}

 	$scope.showMessg = function(thongbao) {
 		var pinTo = $scope.getToastPosition();

 		$mdToast.show(
 			$mdToast.simple()
 			.textContent(thongbao)
 			.position(pinTo )
 			.hideDelay(3000)
 			);
 	};
 })
 app.controller('suaNhanVien', function($scope,$http,API,$mdToast){
 	$http.get(API+'listNV').success(function(response){
 		$scope.nhanViens=response;
 	});
 	$scope.showEdit=function(nv){
 		nv.hienThi=!nv.hienThi;
 	}	
 	$scope.show=function(nv){
 		nv.hienThi=!nv.hienThi;
 		$http.get(API+'listNV').success(function(response){
 			$scope.nhanViens=response;
 		});

 	}	

 	$scope.editNV=function(nv){
 		
 		var data =$.param({
 			ten:nv.ten,
 			gioitinh:nv.gioitinh,
 			quyen:nv.quyen,
 			diaChi:nv.diachi,
 			taiKhoan:nv.tenTaiKhoan,
 		});
 		var config={
 			headers:{
 				'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
 			}
 		}
 		$http.post(API+"editNV/"+nv.id,data,config)
 		.then(function(res){
 			if(res.data == 1)	{	
 				$scope.showMessg('Edit thành công');
 				nv.hienThi=!nv.hienThi;
 				
 			}
 		},function(er){
 			$scope.showMessg('Edit thất bại');
 			console.log(er.data);
 			
 		})

 	};

 	$scope.deleteNV=function(id){
 		var isXacNhan =confirm("Bạn có muốn xóa ?");
 		if(isXacNhan){
 			$http.get(API+'deleteNV/'+id)
 			.then(function(res){
 				if(res.data == 1)	{	
 					$scope.showMessg('Xóa thành công');
 					$http.get(API+'listNV').success(function(response){
 						$scope.nhanViens=response;
 					});
 				}
 			},function(er){
 				$scope.showMessg('Xóa thất bại !');
 			})
 		}
 		else
 			return false;
 	}
 	var last = {
 		bottom: true,
 		top: false,
 		left: false,
 		right: true
 	};

 	$scope.toastPosition = angular.extend({},last);

 	$scope.getToastPosition = function() {
 		sanitizePosition();

 		return Object.keys($scope.toastPosition)
 		.filter(function(pos) { return $scope.toastPosition[pos]; })
 		.join(' ');
 	};

 	function sanitizePosition() {
 		var current = $scope.toastPosition;

 		if ( current.bottom && last.top ) current.top = false;
 		if ( current.top && last.bottom ) current.bottom = false;
 		if ( current.right && last.left ) current.left = false;
 		if ( current.left && last.right ) current.right = false;

 		last = angular.extend({},current);
 	}

 	$scope.showMessg = function(thongbao) {
 		var pinTo = $scope.getToastPosition();

 		$mdToast.show(
 			$mdToast.simple()
 			.textContent(thongbao)
 			.position(pinTo )
 			.hideDelay(3000)
 			);
 	};

 });
/* app.directive('tonumber',function () {
 	return {
 		require : 'ngModel',
 		link: function (scope, iElement, iAttrs,ngModel) {
 			ngModel.$parses.push(function(val){
 				return parseInt(val,10);
 			});
 			ngModel.$formatters.push(function(val){
 				return ''+val;
 			});
 		}
 	};
 });*/
 /* rap phim */
 app.controller('themRapChieu',function ($scope,$http,$mdToast) {
 	$scope.addInfoRap=function(){
 		var urlCon='http://localhost:8080/PROJECT/Cinema/public/addRapPhim';
 		var data =$.param({
 			tenRap:$scope.nameRap,
 			diaChi:$scope.diaChi
 		});
 		console.log(data);
 		var config={
 			headers:{
 				'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
 			}
 		}
 		$http.post(urlCon,data,config)
 		.then(function(res){
 			if(res.data == 1)	{	
 				$scope.showMessg('Thêm thành công');
 			}
 		},function(er){
 			$scope.showMessg('Thêm thất bại');
 			console.log(er.data);
 			
 		})
 	}
 	/* hien thi thong bao */
 	var last = {
 		bottom: true,
 		top: false,
 		left: false,
 		right: true
 	};

 	$scope.toastPosition = angular.extend({},last);

 	$scope.getToastPosition = function() {
 		sanitizePosition();

 		return Object.keys($scope.toastPosition)
 		.filter(function(pos) { return $scope.toastPosition[pos]; })
 		.join(' ');
 	};

 	function sanitizePosition() {
 		var current = $scope.toastPosition;

 		if ( current.bottom && last.top ) current.top = false;
 		if ( current.top && last.bottom ) current.bottom = false;
 		if ( current.right && last.left ) current.left = false;
 		if ( current.left && last.right ) current.right = false;

 		last = angular.extend({},current);
 	}

 	$scope.showMessg = function(thongbao) {
 		var pinTo = $scope.getToastPosition();

 		$mdToast.show(
 			$mdToast.simple()
 			.textContent(thongbao)
 			.position(pinTo )
 			.hideDelay(3000)
 			);
 	};
 });
 app.controller('suaRapChieu', function($scope,$http,API,$mdToast){
 	$http.get(API+'listRap').success(function(response){
 		$scope.rap=response;
 	});
 	$scope.showEdit=function(rapChild){
 		rapChild.hienThi=!rapChild.hienThi;
 		
 	}	
 	$scope.show=function(rapChild){
 		rapChild.hienThi=!rapChild.hienThi;
 		$http.get(API+'listRap').success(function(response){
 			$scope.rap=response;
 		});

 	}	
 	$scope.editrapChild=function(rapChild){
 		
 		var data =$.param({
 			ten:rapChild.tenRap,
 			diaChi:rapChild.diaChi
 		});
 		var config={
 			headers:{
 				'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
 			}
 		}
 		$http.post(API+"editrapChild/"+rapChild.id,data,config)
 		.then(function(res){
 			if(res.data == 1)	{	
 				$scope.showMessg('Edit thành công');
 				rapChild.hienThi=!rapChild.hienThi;
 				
 			}
 		},function(er){
 			$scope.showMessg('Edit thất bại');
 			console.log(er.data);
 			
 		})

 	};

 	$scope.deleteRap=function(id){
 		var isXacNhan =confirm("Bạn có muốn xóa ?");
 		if(isXacNhan){
 			$http.post(API+'deleteRap/'+id)
 			.then(function(res){
 				if(res.data == 1)	{	
 					$scope.showMessg('Xóa thành công');
 					$http.get(API+'listRap').success(function(response){
 						$scope.rap=response;
 						console.log(response);
 					});
 				}
 			},function(er){
 				$scope.showMessg('Xóa thất bại !');
 			})
 		}
 		else
 			return false;
 	}
 	var last = {
 		bottom: true,
 		top: false,
 		left: false,
 		right: true
 	};

 	$scope.toastPosition = angular.extend({},last);

 	$scope.getToastPosition = function() {
 		sanitizePosition();

 		return Object.keys($scope.toastPosition)
 		.filter(function(pos) { return $scope.toastPosition[pos]; })
 		.join(' ');
 	};

 	function sanitizePosition() {
 		var current = $scope.toastPosition;

 		if ( current.bottom && last.top ) current.top = false;
 		if ( current.top && last.bottom ) current.bottom = false;
 		if ( current.right && last.left ) current.left = false;
 		if ( current.left && last.right ) current.right = false;

 		last = angular.extend({},current);
 	}

 	$scope.showMessg = function(thongbao) {
 		var pinTo = $scope.getToastPosition();

 		$mdToast.show(
 			$mdToast.simple()
 			.textContent(thongbao)
 			.position(pinTo )
 			.hideDelay(3000)
 			);
 	};

 });
 /*end rap phim*/
 /* the loai phim*/
 app.controller('theloai', function($scope,$http,API,$mdToast){
 	$http.get(API+'listTL').success(function(response){
 		$scope.tL=response;
 	});
 	$scope.addTL=function(){
 		var urlCon='http://localhost:8080/PROJECT/Cinema/public/addTL';
 		var data =$.param({
 			tenTL:$scope.tenTL,
 		});
 		console.log(data);
 		var config={
 			headers:{
 				'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
 			}
 		}
 		$http.post(urlCon,data,config)
 		.then(function(res){
 			if(res.data == 1)	{	
 				$scope.showMessg('Thêm thành công');
 				$http.get(API+'listTL').success(function(response){
 					$scope.tL=response;
 				});
 			}
 		},function(er){
 			$scope.showMessg('Thêm thất bại');
 			console.log(er.data);
 			
 		})
 	}
 	$scope.showEdit=function(val){
 		val.hienThi=!val.hienThi;
 		
 	}	
 	$scope.show=function(val){
 		val.hienThi=!val.hienThi;
 		$http.get(API+'listTL').success(function(response){
 			$scope.tL=response;
 		});

 	}	
 	$scope.ediTL=function(val){
 		
 		var data =$.param({
 			ten:val.tenTL,
 		});
 		var config={
 			headers:{
 				'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
 			}
 		}
 		$http.post(API+"editTL/"+val.id,data,config)
 		.then(function(res){
 			if(res.data == 1)	{	
 				$scope.showMessg('Edit thành công');
 				val.hienThi=!val.hienThi;
 			}
 		},function(er){
 			$scope.showMessg('Edit thất bại');
 			console.log(er.data);
 			
 		})

 	};

 	$scope.deleteTL=function(id){
 		var isXacNhan =confirm("Bạn có muốn xóa ?");
 		if(isXacNhan){
 			$http.post(API+'deleteTL/'+id)
 			.then(function(res){
 				if(res.data == 1)	{	
 					$scope.showMessg('Xóa thành công');
 					$http.get(API+'listTL').success(function(response){
 						$scope.tL=response;
 						console.log(response);
 					});
 				}
 			},function(er){
 				$scope.showMessg('Xóa thất bại !');
 			})
 		}
 		else
 			return false;
 	}
 	var last = {
 		bottom: true,
 		top: false,
 		left: false,
 		right: true
 	};

 	$scope.toastPosition = angular.extend({},last);

 	$scope.getToastPosition = function() {
 		sanitizePosition();

 		return Object.keys($scope.toastPosition)
 		.filter(function(pos) { return $scope.toastPosition[pos]; })
 		.join(' ');
 	};

 	function sanitizePosition() {
 		var current = $scope.toastPosition;

 		if ( current.bottom && last.top ) current.top = false;
 		if ( current.top && last.bottom ) current.bottom = false;
 		if ( current.right && last.left ) current.left = false;
 		if ( current.left && last.right ) current.right = false;

 		last = angular.extend({},current);
 	}

 	$scope.showMessg = function(thongbao) {
 		var pinTo = $scope.getToastPosition();

 		$mdToast.show(
 			$mdToast.simple()
 			.textContent(thongbao)
 			.position(pinTo )
 			.hideDelay(3000)
 			);
 	};

 });

 /* edn the loai*/
 /* ql phim*/
  app.controller('ql_Phim', function($scope,$http,API,$mdToast){
 	$http.get(API+'listTL').success(function(response){
 		$scope.tL=response;
 	});
 	/*$http.post(urlCon+'upImg', formData,
 						transformRequest:angular.identity,
 						headers:{'Content-type':undefined,'Process-Data':false}
 					)
 				.then(function (res) {
 					if(res.data == 2)	{
 					
 				}
 				});*/
 	$scope.addPhim=function(){
 		var urlCon='http://localhost:8080/PROJECT/Cinema/public/';
 		var formData=new FormData();
 		angular.forEach($scope.files, function(file){
 			formData.append('file',file);
 		});
 		var data =$.param({
 			namePhim:$scope.namePhim,
 			idTL:$scope.idTL,
 			noidung:$scope.nd,
 			khoiChieu:$scope.ngayKC,
 			thoiLuong:$scope.tlPhim,
 			trailer:$scope.trailer,
 		});

 		console.log(data);
 		var config={
 			headers:{
 				'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
 			}
 		}
 		$http.post(urlCon+'addPhim',data,config)
 		.then(function(res){
 			if(res.data == 1)	{	
 				$scope.showMessg('Thêm thành công');
 			}
 		},function(er){
 			$scope.showMessg('Thêm thất bại');
 			console.log(er.data);
 			
 		})
 	}
 	$scope.showEdit=function(val){
 		val.hienThi=!val.hienThi;
 		
 	}	
 	$scope.show=function(val){
 		val.hienThi=!val.hienThi;
 		$http.get(API+'listTL').success(function(response){
 			$scope.tL=response;
 		});

 	}	
 	$scope.editPhim=function(val){
 		
 		var data =$.param({
 			ten:val.tenTL,
 		});
 		var config={
 			headers:{
 				'content-type':'application/x-www-form-urlencoded;charset=UTF-8'
 			}
 		}
 		$http.post(API+"editPhim/"+val.id,data,config)
 		.then(function(res){
 			if(res.data == 1)	{	
 				$scope.showMessg('Edit thành công');
 				val.hienThi=!val.hienThi;
 			}
 		},function(er){
 			$scope.showMessg('Edit thất bại');
 			console.log(er.data);
 			
 		})

 	};

 	$scope.deletePhim=function(id){
 		var isXacNhan =confirm("Bạn có muốn xóa ?");
 		if(isXacNhan){
 			$http.post(API+'deletePhim/'+id)
 			.then(function(res){
 				if(res.data == 1)	{	
 					$scope.showMessg('Xóa thành công');
 					$http.get(API+'listTL').success(function(response){
 						$scope.tL=response;
 						console.log(response);
 					});
 				}
 			},function(er){
 				$scope.showMessg('Xóa thất bại !');
 			})
 		}
 		else
 			return false;
 	}
 	var last = {
 		bottom: true,
 		top: false,
 		left: false,
 		right: true
 	};

 	$scope.toastPosition = angular.extend({},last);

 	$scope.getToastPosition = function() {
 		sanitizePosition();

 		return Object.keys($scope.toastPosition)
 		.filter(function(pos) { return $scope.toastPosition[pos]; })
 		.join(' ');
 	};

 	function sanitizePosition() {
 		var current = $scope.toastPosition;

 		if ( current.bottom && last.top ) current.top = false;
 		if ( current.top && last.bottom ) current.bottom = false;
 		if ( current.right && last.left ) current.left = false;
 		if ( current.left && last.right ) current.right = false;

 		last = angular.extend({},current);
 	}

 	$scope.showMessg = function(thongbao) {
 		var pinTo = $scope.getToastPosition();

 		$mdToast.show(
 			$mdToast.simple()
 			.textContent(thongbao)
 			.position(pinTo )
 			.hideDelay(3000)
 			);
 	};

 });

 /* end ql phim*/