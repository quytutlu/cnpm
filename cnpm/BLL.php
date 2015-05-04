<?php  
	include_once "DAL.php";
	include_once "Object/DeTai.php";
	include_once "Object/YeuCau.php";
	class XuLyNghiepVu{
		private $ThaoTacCSDL;
		public function XuLyNghiepVu(){
			$this->ThaoTacCSDL=new TruyXuatDuLieu();
		}
		public function DangNhap($TenDangNhap,$MatKhau){
			$kq=$this->ThaoTacCSDL->DangNhap($TenDangNhap,$MatKhau);
			$row=mysql_fetch_array($kq);
			return $row;
		}
		public function ThemDeTai($TenDeTai,$SoGio,$id_GiaoVien,$TrangThai){
			return $this->ThaoTacCSDL->ThemDeTai($TenDeTai,$SoGio,$id_GiaoVien,$TrangThai);
		}
		public function LayDeTai($id_GiaoVien){
			$kq=$this->ThaoTacCSDL->LayDeTai($id_GiaoVien);
			$ListDeTai;
			while($row=mysql_fetch_array($kq)){
				$temp=new DeTai();
				$temp->TenDeTai=$row[1];
				$temp->SoGio=$row[2];
				$temp->TrangThai=$row[4];
				$ListDeTai[]=$temp;
			}
			return $ListDeTai;
		}
		public function LayCacDeTaiChuaDuyet(){
			$kq=$this->ThaoTacCSDL->LayCacDeTaiChuaDuyet();
			$ListDeTai;
			while($row=mysql_fetch_array($kq)){
				$temp=new YeuCau();
				$temp->idYeuCau=$row[2];
				$temp->MaGiaoVien=$row[0];
				$temp->TenGiaoVien=$row[1];
				$temp->TenDeTai=$row[3];
				$temp->SoGio=$row[4];
				$ListDeTai[]=$temp;
			}
			return $ListDeTai;
		}
		public function DuyetDeTai($id_DeTai,$TrangThai){
			return $this->ThaoTacCSDL->DuyetDeTai($id_DeTai,$TrangThai);
		}
	}
?>