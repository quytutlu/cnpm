<?php  
	include_once "BLL.php";
	function Display($key,$value)
	{
		$KetQua=json_encode(array($key=>$value));
		echo $KetQua;
	}
	$XuLyNV=new XuLyNghiepVu();
	if(isset($_GET["cmd"]))
	{
		$cmd=$_GET["cmd"];
		switch ($cmd) {
		case "dangnhap":
			$TenDangNhap;
			$MatKhau;
			if(isset($_GET["tendangnhap"])){
				$TenDangNhap=$_GET["tendangnhap"];
			}
			if(isset($_GET["matkhau"])){
				$MatKhau=$_GET["matkhau"];
			}
			$kq=$XuLyNV->DangNhap($TenDangNhap,$MatKhau);
			if($kq==null){
				Display("id","-1");
			}else{
				echo json_encode(array("id"=>$kq[0],"VaiTro"=>$kq[3]));
			}
			break;
		case "themdetai":
			if(isset($_GET["tendetai"])&&isset($_GET["id_giaovien"])&&isset($_GET["sogio"])&&isset($_GET["trangthai"])){
				Display("success",$XuLyNV->ThemDeTai($_GET["tendetai"],$_GET["sogio"],$_GET["id_giaovien"],$_GET["trangthai"]));
			}
			break;
		case "laydetai":
			if(isset($_GET["id_giaovien"])){
				Display("list",$XuLyNV->LayDeTai($_GET["id_giaovien"]));
			}
			break;
		case "laycacdetaichuaduyet":
			Display("list",$XuLyNV->LayCacDeTaiChuaDuyet());
			break;
		case "duyetyeucau":
			if(isset($_GET["id_detai"])&&isset($_GET["trangthai"])){
				Display("success",$XuLyNV->DuyetDeTai($_GET["id_detai"],$_GET["trangthai"]));
			}
			break;
		}
	}
?>