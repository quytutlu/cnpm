var id=sessionStorage.getItem("id");
var user=sessionStorage.getItem("tendangnhap");
var vaitro=sessionStorage.getItem("vaitro");
if(vaitro=="1"){
	document.getElementById("themthietbi").setAttribute("style", "display:show");
	document.getElementById("theodoithietbi").setAttribute("style", "display:show");
	document.getElementById("duyetyeucau").setAttribute("style", "display:show");
	document.getElementById("baocaoduyetyc").setAttribute("style", "display:show");
	document.getElementById("giahan").setAttribute("style", "display:show");
}else if(vaitro=="2"){
	document.getElementById("quantri").setAttribute("style", "display:show");
	document.getElementById("dexuatthietbi").setAttribute("style", "display:show");
	document.getElementById("baocaoduyetyc").setAttribute("style", "display:show");
	document.getElementById("api").setAttribute("style", "display:show");
}else if(vaitro=="3"){
	document.getElementById("quantri").setAttribute("style", "display:none");
	document.getElementById("themthietbi").setAttribute("style", "display:none");
	document.getElementById("theodoithietbi").setAttribute("style", "display:none");
}
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
function API_GUI(){
	alert("http://192.99.66.193:1234/kltn_arduino/?cmd=laytrangthaiarduino&id="+id);
}
function GiaHan(){
	var temp="index.php?cmd=updatehethan";
	$.ajax({type: 'GET',url: temp,
		success:function(data){
			obj=JSON.parse(data);
			if(obj.success==true){
				alert("Gia hạn hệ thống thành công!");
			}else{
				alert("Gia hạn hệ thống thất bại!");
			}
		}
	});
}