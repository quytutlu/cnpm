//check session
if(sessionStorage.getItem("success")!="true")
{
	window.location.href = "login.php";
}

//load dư liệu từ database
var id=sessionStorage.getItem("id");
var user=sessionStorage.getItem("tendangnhap");
var vaitro=sessionStorage.getItem("vaitro");
if(vaitro=="1"){
	document.getElementById("themthietbi").setAttribute("style", "display:show");
	document.getElementById("theodoithietbi").setAttribute("style", "display:show");
	document.getElementById("baocaoduyetyc").setAttribute("style", "display:show");
	document.getElementById("duyetyeucau").setAttribute("style", "display:show");
	document.getElementById("giahan").setAttribute("style", "display:show");
}else if(vaitro=="2"){
	document.getElementById("gioithieu").setAttribute("style", "display:show");
	document.getElementById("quantri").setAttribute("style", "display:show");
	document.getElementById("doimatkhau").setAttribute("style", "display:show");
	document.getElementById("baocaoduyetyc").setAttribute("style", "display:show");
	document.getElementById("dexuatthietbi").setAttribute("style", "display:show");
	document.getElementById("api").setAttribute("style", "display:show");
}else if(vaitro=="3"){
	document.getElementById("gioithieu").setAttribute("style", "display:show");
	document.getElementById("doimatkhau").setAttribute("style", "display:show");
}
document.getElementById("ThongBao").innerHTML="Xin chào "+user+" (id:"+id+")";
function DangXuat(){
	sessionStorage.setItem("success", "false");
	window.location.href = "login.php";
}
var temp="index.php?cmd=layduyetyc&id_nguoitao="+id+"&id_vaitro="+vaitro+"&trangthaiyeucau=2";
$.ajax({type: 'GET',url: temp,
	success:function(data){
		PageLayoutYC(data);
	}
});
function PageLayoutYC(data){
	obj = JSON.parse(data);
	var DaDuyet=0;
	var DangCho=0;
	var KhongDuyet=0;
	var table=document.getElementById("bangyeucau");
	if(vaitro=="2"){
		document.getElementById("baocaoyc").rows[0].cells[1].style.display="none";
	}
	if(vaitro=="1"){
		document.getElementById("nguoidexuat").setAttribute("style", "text-align: center;width:200px; display:show;");
	}
	for (var i = 0; i < obj.list.length; i++) {
		var row=table.insertRow(i+1);
		var cell1=row.insertCell(0);
		var cell2=row.insertCell(1);
		var cell3=row.insertCell(2);
		var cell4=row.insertCell(3);
		cell1.innerHTML=(i+1);
		cell1.style.width="70px";
		cell3.innerHTML=obj.list[i].TenThietBi;
		cell3.style.width="200px";
		var lable=obj.list[i].TrangThaiYeuCau=="-1"?"Đang chờ duyệt":obj.list[i].TrangThaiYeuCau=="1"?"Đã được duyệt":"Không được duyệt";
		var type=obj.list[i].TrangThaiYeuCau=="-1"?"btn btn-info":obj.list[i].TrangThaiYeuCau=="1"?"btn btn-success":"btn btn-warning";
		cell4.innerHTML=lable;
		cell4.style.width="300px";
		cell4.innerHTML="<input style=\"width:150px\" class=\""+type+"\" type=\"button\" value=\""+lable+"\"/>";
		cell2.innerHTML=obj.list[i].NguoiDeXuat;
		cell2.style.width="200px";
		if(vaitro==2){
			cell2.style.display="none";
		}
		if(obj.list[i].TrangThaiYeuCau=="-1"){
			DangCho++;
		}
		if(obj.list[i].TrangThaiYeuCau=="0"){
			KhongDuyet++;
		}
		if(obj.list[i].TrangThaiYeuCau=="1"){
			DaDuyet++;
		}
	}
	sessionStorage.setItem("DangCho", DangCho);
	sessionStorage.setItem("KhongDuyet", KhongDuyet);
	sessionStorage.setItem("DaDuyet", DaDuyet);
}
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
function API(){
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