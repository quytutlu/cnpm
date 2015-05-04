if(sessionStorage.getItem("success")!="true"){
	window.location.href = "login.php";
}
var id=sessionStorage.getItem("id");
var user=sessionStorage.getItem("tendangnhap");
var vaitro=sessionStorage.getItem("vaitro");
if(vaitro=="1"){
	document.getElementById("themthietbi").setAttribute("style", "display:show");
	document.getElementById("theodoithietbi").setAttribute("style", "display:show");
	document.getElementById("baocaoduyetyc").setAttribute("style", "display:show");
}else if(vaitro=="2"){
	document.getElementById("themthietbi").setAttribute("style", "display:none");
	document.getElementById("theodoithietbi").setAttribute("style", "display:none");
}else if(vaitro=="3"){
	document.getElementById("themthietbi").setAttribute("style", "display:none");
	document.getElementById("theodoithietbi").setAttribute("style", "display:none");
}
document.getElementById("ThongBao").innerHTML="Xin chào "+user+" (id:"+id+")";
window.onload=function(){
	var temp="index.php?cmd=laycactaikhoanquanly&idnguoitao="+id;
	$.ajax({type:'GET',url:temp,success:function(data){
			obj=JSON.parse(data);
			var select=document.getElementById("CacTaiKhoan");
			for (var i = 0; i <obj.list.length; i++) {
				var option = document.createElement('option');
        		option.text =  obj.list[i].TenTaiKhoan;
        		option.value =obj.list[i].id;
        		select.add(option, i);
			};
		}
	});
}
function DangXuat(){
	sessionStorage.setItem("success", "false");
	window.location.href = "login.php";
}
function ThemThietBi(){
	var TenThietBi=document.getElementById("tenthietbi").value;
	var TenVietTat=document.getElementById("tenviettat").value;
	var TrangThai=document.getElementById("trangthai").value;
	var TenTiengViet=document.getElementById("tentiengviet").value;
	var ReadOnly=document.getElementById("readonly").checked;
	var e=document.getElementById("CacTaiKhoan");
	var id_NguoiDung = e.options[e.selectedIndex].value;
	if(TenThietBi==""||TenVietTat==""||TrangThai==""||TenTiengViet==""){
		alert("Bạn cần điền đầy đủ thông tin");
	}else if(id_NguoiDung==""){
		alert("Bạn cần chọn tài khoản");
	}else{
		ReadOnly=ReadOnly==true?"1":"0";
		var temp="index.php?cmd=themthietbi&tenthietbi="+TenThietBi+"&tenviettat="+TenVietTat+"&trangthai="+TrangThai+"&readonly="+ReadOnly+"&tentiengviet="+TenTiengViet+"&idnguoidung="+id_NguoiDung;
		$.ajax({type: 'GET',url: temp,
			success:function(data){
				obj=JSON.parse(data);
				if(obj.success==true){
					document.getElementById("tenthietbi").value="";
					document.getElementById("tenviettat").value="";
					document.getElementById("trangthai").value="";
					document.getElementById("tentiengviet").value="";
					document.getElementById("readonly").checked=false;
					document.getElementById("addThietBi").setAttribute("style", "display:show");
					document.getElementById("formdangky").setAttribute("style", "display:none");
					LoadData();
					alert("Thêm thiết bị thành công");
				}else{
					alert("Thêm thiết bị thất bại");
				}
			}
		});
	}
}
window.ChonTaiKhoan=function(){
	LoadData();
}
function LoadData(){
	var table=document.getElementById("bangdieukhien");
	var count=document.getElementById("bangdieukhien").rows.length;
	var e = document.getElementById("CacTaiKhoan");
	var id_NguoiDung = e.options[e.selectedIndex].value;
	var temp="index.php?cmd=laytrangthai&id="+id_NguoiDung;
	$.ajax({type: 'GET',url: temp,
		success:function(data){
			var table=document.getElementById("bangdieukhien");
			for(var i = 1; i < table.rows.length;){   
			   table.deleteRow(i);
			}
			PageLayout(data);
		}
	});
}
function PageLayout(data){
	obj = JSON.parse(data);
	var table=document.getElementById("bangdieukhien");
	for (var i = 0; i < obj.list.length; i++) {
		var row=table.insertRow(i+1);
		var cell1=row.insertCell(0);
		var cell2=row.insertCell(1);
		ReadOnly=obj.list[i].ReadOnly;
		TrangThai=obj.list[i].TrangThai;
		TrangThai=TrangThai=="0"?"Tắt":"Bật";
		if(ReadOnly=="1"){
			TrangThai=obj.list[i].TrangThai;
		}
		cell1.innerHTML=obj.list[i].TenThietBi;
		cell2.innerHTML=TrangThai;
	}
}
function AddDriver(){
	document.getElementById("addThietBi").setAttribute("style", "display:none");
	document.getElementById("formdangky").setAttribute("style", "display:show");
}
function Hidden(){
	document.getElementById("addThietBi").setAttribute("style", "display:show");
	document.getElementById("formdangky").setAttribute("style", "display:none")
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