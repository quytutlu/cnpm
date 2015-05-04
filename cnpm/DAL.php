<?php 
	class TruyXuatDuLieu{
		public function TruyXuatDuLieu(){
			$connect=mysql_connect("localhost","root","60648994t");
			mysql_query("SET character_set_results=utf8", $connect);
			mb_language('uni');
			mb_internal_encoding('UTF-8');
			mysql_select_db("cnpm", $connect);
			mysql_query("set names 'utf8'",$connect);
		}
		public function DangNhap($TenDangNhap,$MatKhau){
			$sql="Call DangNhap(\"".$TenDangNhap."\",\"".$MatKhau."\")";
			return mysql_query($sql);
		}
		public function ThemDeTai($TenDeTai,$SoGio,$id_GiaoVien,$TrangThai){
			$sql="Call ThemDeTai(\"".$TenDeTai."\",".$SoGio.",".$id_GiaoVien.",".$TrangThai.")";
			return mysql_query($sql);
		}
		public function LayDeTai($id_GiaoVien){
			$sql="Call LayDeTai(".$id_GiaoVien.")";
			return mysql_query($sql);
		}
		public function LayCacDeTaiChuaDuyet(){
			$sql="Call LayCacDeTaiChuaDuyet()";
			return mysql_query($sql);
		}
		public function DuyetDeTai($id_DeTai,$TrangThai){
			$sql="Call DuyetYeuCau(".$id_DeTai.",".$TrangThai.")";
			return mysql_query($sql);
		}
	}
?>