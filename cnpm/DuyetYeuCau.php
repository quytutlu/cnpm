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
          <a class="navbar-brand" onclick="KiemTraVaiTro()">Smart Home</a>
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

	<center style="margin-top:70px;">
		<p class="h1">Các đề tài đang chờ duyệt</p>
	</center>	
	<div style="width:900px; height:500px; margin: 0 auto; font-size:30px; overflow-y: auto;">
		<center>
		<table class="table table-striped table-bordered table-hover" id="bangdieukhien">
			<tr>
				<th class="bg-info" style="text-align: center">STT</th>
				<th class="bg-info" style="text-align: center">Mã giảng viên</th>
				<th class="bg-info" style="text-align: center">Tên giáo viên</th>
				<th class="bg-info" style="text-align: center">Tên đề tài</th>
				<th class="bg-info" style="text-align: center">Số giờ</th>
				<th class="bg-info" style="text-align: center">Hành động</th>
			</tr>
		</table>
		</center>
	</div>
	<script type="text/javascript" src="bootstrap-3.3.4-dist/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="javaScript/DuyetYeuCau.js"></script>
</body>
</html>