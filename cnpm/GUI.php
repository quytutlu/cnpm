<html>
<head>
	<title>Software Engineering</title>
	<style type="text/css">
	.table input {
		width: 100px;
	}
	.table {
		text-align: center;
	}
	</style>
	<link rel="stylesheet" type="text/css" href="bootstrap-3.3.4-dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="bootstrap-3.3.4-dist/css/bootstrap-theme.min.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
	<link rel="icon" type="image/png" href="image/icon.png" sizes="196x196" />
	<script src="javaScript/jquery-2.1.3.min.js"></script>
	<link rel="stylesheet" href="css/standard.css">
	<link rel="stylesheet" type="text/css" href="css/tipr.css">
	<script type="text/javascript" src="javaScript/tipr.js"></script>
	<meta charset="utf-8"/>
</head>
<body style="font-family:Arial;">
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand">Software Engineering</a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li><a href="DuyetYeuCau.php" id="duyetdetai" style="display:none;">Duyệt đề tài</a></li>
					<li><a href="GUI.php" id="khaibaodetai" style="display:none;">Khai báo đề tài</a></li>
				</ul>
				<form class="navbar-form navbar-right">
					<div class="form-group">
						<div class="tip" id="tooltip" data-tip="Lorem ipsum">
							<a style="color:#FFFFFF; text-decoration:none;" href="#" id="ThongBao">Xin chào</a>
						</div>
					</div>
					<button type="button" class="btn btn-success" onclick="DangXuat();">Đăng Xuất</button>
				</form>
			</div><!--/.navbar-collapse -->
		</div>
	</nav>

	
	
	<div class="container">
		<div class="row row-offcanvas row-offcanvas-right">
			<div class="col-xs-12 col-sm-9" style="width:650px">
				<center style="margin-top:70px;">
					<p class="h1">Khai báo đề tài</p>
				</center>
				<form class="form-horizontal">
					<div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">Tên đề tài</label>
						<div class="input-group">
							<span class="input-group-addon"><i class="fa fa-graduation-cap" style="width:20px"></i></span>
							<input style="width:300px" type="text" class="form-control" id="tendetai" placeholder="Tên đề tài">
						</div>
					</div>
					<div class="form-group">
						<label for="inputPassword3" class="col-sm-2 control-label">Số giờ</label>
						<div class="input-group">
							<span class="input-group-addon"><i class="fa fa-clock-o" style="width:20px"></i></span>
							<input style="width:300px" type="text" class="form-control" id="sogio" placeholder="Số giờ">
						</div>
					</div>
					<div class="form-group" style="margin-left:20px">
						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">
								<input class="btn btn-default" type="button" value="Thêm đề tài" onclick="ThemDeTai()">
							</div>
						</div>
					</div>
				</form>
			</div><!--/.col-xs-12.col-sm-9-->

			<div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" style="width:500px">
				<center style="margin-top:70px;">
					<p class="h1">Các đề tài đã khai báo</p>
				</center>	
				<div style="width:500px; height:300px; margin: 0 auto; font-size:30px; overflow-y: auto;">
					<center>
					<table class="table table-striped table-bordered table-hover" id="bangdieukhien">
						<tr>
							<th class="bg-info" style="text-align: center">Tên đề tài</th>
							<th class="bg-info" style="text-align: center">Số giờ</th>
							<th class="bg-info" style="text-align: center">Trạng thái</th>
						</tr>
					</table>
					</center>
				</div>
			</div><!--/.sidebar-offcanvas-->
		</div><!--/row-->
	</div>

	<script type="text/javascript" src="bootstrap-3.3.4-dist/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="javaScript/GUI.js"></script>
</body>
</html>