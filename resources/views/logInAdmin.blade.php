<!-- .................... -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Đăng nhập</title>
	<base href="{{asset('')}}">
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/function.js"></script>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>
	<div class="cha">
		<img src="images/section.jpg" class="img-fluid banner" alt="">
		<div class="container">
			<form action="{{route('logInAD')}}" class="form-dn " method="post">
				 <input type="hidden" name="_token" value="{{csrf_token()}}">
				<div class="container">
					<div class="row">
						<div class="col-md-12 img-nen">
							<img src="images/logo12.png" class="img-hinh" alt="">
						</div>
						<div class="col-md-12 theInput">
							<input type="text" placeholder="Tên đăng nhập" name="userName"></input>
						</div>
						<div class="col-md-12 theInput">
							<input placeholder="Mật khẩu" type="Password" name="pass">
						</div>
						<div class="col-md-12 nutSubmit">
							<input type="submit" value="Đăng nhập"></div>	
						</div>
					</div>
				</form>
			</div>
		</div>
	</body>
	</html>