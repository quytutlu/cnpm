var id=sessionStorage.getItem("id");
var user=sessionStorage.getItem("tendangnhap");
var vaitro=sessionStorage.getItem("vaitro");
document.getElementById("ThongBao").innerHTML="Xin chào "+user+" (id:"+id+")";
function DangXuat(){
	sessionStorage.setItem("success", "false");
	window.location.href = "login.php";
}
$(document).ready(function() {
	var temp="index.php?cmd=laythongtinnguoidung&id="+id;
	$(document).ready(function() {
		var temp="index.php?cmd=laythongtinnguoidung&id="+id;
		$.ajax({type: 'GET',url: temp,success:function(data){
			obj=JSON.parse(data);
			var id_user=obj.id;
			var TenDangNhap=obj.TenDangNhap;
			var Email=obj.Email;
			var SDT=obj.SDT;
			var NguoiTao=obj.NguoiTao;
			var VaiTro=obj.VaiTro;
			var NgayThamGia=obj.NgayThamGia;
			var HanDung=obj.HanDung;
			var info="<center><b><h3>Thông tin cá nhân</h3></b></center><b>Mã tài khoản:</b> "+id_user+"</br><b>Tên đăng nhập:</b> "+TenDangNhap+"</br><b>Email:</b> "+Email+"</br><b>SĐT:</b> "+SDT+"</br><b>Người tạo:</b> "+NguoiTao+"</br><b>Vai trò:</b> "+VaiTro+"</br><b>Ngày tham gia: </b>"+NgayThamGia+"</br><b>Hạn dùng: </b>"+HanDung;
			document.getElementById('tooltip').setAttribute("data-tip", info);
	    	$('.tip').tipr();
		}});
	});
});
function GiaHan(){
	$.ajax({type:'GET',url:"index.php?cmd=giahan&id="+id+"&songay=15",
		success:function  (data) {
			obj = JSON.parse(data);
			if(obj.success==true){
				sessionStorage.setItem("success", "true");
				if(obj.VaiTro=="1"){
					window.location.href="TheoDoiThietBi.php";
				}else{
					window.location.href = "gui.php";
				}
			}else{
				alert("Gia hạn thất bại");
			}
		}
	});
}