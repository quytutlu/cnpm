<html>
<head>
	<title>Công nghệ phần mềm</title>
	<link rel="icon" type="image/png" href="image/icon.png" sizes="196x196" />
	<link rel="stylesheet" type="text/css" href="bootstrap-3.3.4-dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="bootstrap-3.3.4-dist/css/bootstrap-theme.min.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
</head>
<body background="image/Background.jpg" style="margin:auto">
	<div class="container">
		<div class="row row-offcanvas row-offcanvas-right">
			<div class="col-xs-12 col-sm-9" style="width:600px">
				<form class="form-horizontal">
					<div class="form-group" style="margin-top:100px">
						<label for="inputEmail3" class="col-sm-2 control-label">Tên đăng nhập</label>
						<div class="input-group">
							<span class="input-group-addon"><i class="fa fa-user" style="width:20px"></i></span>
							<input style="width:300px" type="text" class="form-control" id="user" placeholder="Username">
						</div>
					</div>
					<div class="form-group">
						<label for="inputPassword3" class="col-sm-2 control-label">Mật khẩu</label>
						<div class="input-group">
							<span class="input-group-addon"><i class="fa fa-key fa-fw" style="width:20px"></i></span>
							<input style="width:300px" type="password" class="form-control" id="pass" placeholder="Password"
							onkeydown="{if(event.keyCode == 13){DangNhap()};};">
						</div>
					</div>
					<div class="form-group" style="margin-left:20px">
						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">
								<input class="btn btn-default" type="button" value="Đăng nhập" onclick="DangNhap()">
								
							</div>
						</div>
					</div>
				</form>
			</div><!--/.col-xs-12.col-sm-9-->

			<div class="col-xs-6 col-sm-3 sidebar-offcanvas" style="margin-top:100px;" id="sidebar">
			</div><!--/.sidebar-offcanvas-->
		</div><!--/row-->
	</div>
	<script type="text/javascript" src="javaScript/login.js"></script>
	<script type='text/javascript' src='javaScript/jquery-1.9.1.js'></script>
	<script type="text/javascript" src="javaScript/jquery.session.js"></script>
</body>
</html>