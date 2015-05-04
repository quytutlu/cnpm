if(sessionStorage.getItem("success")!="true"){
	window.location.href = "login.php";
}
var id=sessionStorage.getItem("id");
var user=sessionStorage.getItem("tendangnhap");
var vaitro=sessionStorage.getItem("vaitro");
document.getElementById("ThongBao").innerHTML="Xin chào "+user+" (id:"+id+")";
window.onload=function(){
	LoadAcc();
}
function LoadAcc(){
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
window.ChonTaiKhoan=function(){
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
	for(var i = 1; i < table.rows.length;){   
	   table.deleteRow(i);
	}
	for (var i = 0; i < obj.list.length; i++) {
		var row=table.insertRow(i+1);
		var cell1=row.insertCell(0);
		var cell2=row.insertCell(1);
		var cell3=row.insertCell(2);
		var cell4=row.insertCell(3);
		ThietBi=obj.list[i].TenThietBi;
		ReadOnly=obj.list[i].ReadOnly;
		id_ThietBi=obj.list[i].id;
		if(ThietBi!="Nhiệt độ"){
			TrangThai=obj.list[i].TrangThai==1?"Bật":"Tắt";				
		}else{
			TrangThai=obj.list[i].TrangThai;
		}
		cell1.innerHTML=ThietBi;
		cell2.innerHTML=TrangThai;
		if(ReadOnly=="1"){
			TrangThai=obj.list[i].TrangThai;
		}
		if(TrangThai=="Bật"){
			clbtn="btn btn-primary"
		}
		cell2.style.display="none";
		cell3.innerHTML=TrangThai;
		cell4.innerHTML="<input class=\"btn btn-danger\" type=\"button\" id=\""+id_ThietBi+"\" onclick=\"XoaThietBi(this.id,"+(i+1)+")\" value=\"Xóa\"/>";
	}
}
function XoaThietBi(id_ThietBi,row_index){
	if(confirm("Xác nhận?")==true){
		var e = document.getElementById("CacTaiKhoan");
		var id_NguoiDung = e.options[e.selectedIndex].value;
		var temp="index.php?cmd=xoathietbi&idnguoidung="+id_NguoiDung+"&idthietbi="+id_ThietBi;;
		$.ajax({type: 'GET',url: temp,
			success:function(data){
				var table=document.getElementById("bangdieukhien");
				table.deleteRow(row_index);
			}
		});
	}
}
function DangXuat(){
	sessionStorage.setItem("success", "false");
	window.location.href = "login.php";
}
function CreateAcc(){
	//document.getElementById("formdangky").
	document.getElementById("taotk").setAttribute("style", "display:none");
	document.getElementById("formdangky").setAttribute("style", "display:show");
}
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
function DangKy(){
	var TenDangNhap=document.getElementById("tendangnhap").value;
	var MatKhau=document.getElementById("matkhau").value;
	var GoLaiMatKhau=document.getElementById("golaimatkhau").value;
	var Email=document.getElementById("email").value;
	var Sdt=document.getElementById("sdt").value;
	if(MatKhau!=GoLaiMatKhau){
		alert("Mật khẩu không trùng nhau");
		document.getElementById("matkhau").value="";
		document.getElementById("golaimatkhau").value="";
		return;
	}else if(MatKhau==""||GoLaiMatKhau==""||TenDangNhap==""||Email==""||Sdt==""){
		alert("Bạn phải điền đủ thông tin");
		return;
	}else if(!validateEmail(Email)){
		alert("Email không chính xác");
	}else{
		var temp="index.php?cmd=kiemtratontaiuser&tendangnhap="+TenDangNhap;
		$.ajax({type: 'GET',url: temp,
			success:function(data){
				obj=JSON.parse(data);
				if(obj.success==true){
					document.getElementById("tendangnhap").value="";
					alert("Tài khoản đã tồn tại!");
				}else{
					k=vaitro=="1"?"2":"3";
					temp="index.php?cmd=dangky&tendangnhap="+TenDangNhap+"&matkhau="+MatKhau+"&vaitro="+k+"&idnguoitao="+id+"&email="+Email+"&sdt="+Sdt;
					$.ajax({type: 'GET',url: temp,
						success:function(data){
							obj=JSON.parse(data);
							if(obj.success==true){
								document.getElementById("tendangnhap").value="";
								document.getElementById("matkhau").value="";
								document.getElementById("golaimatkhau").value="";
								document.getElementById("taotk").setAttribute("style", "display:show");
								document.getElementById("formdangky").setAttribute("style", "display:none");
								var select=document.getElementById("CacTaiKhoan").options.length=0;
								LoadAcc();
								document.getElementById("tendangnhap").value="";
								document.getElementById("matkhau").value="";
								document.getElementById("golaimatkhau").value="";
								document.getElementById("email").value="";
								document.getElementById("sdt").value="";
								alert("Đăng ký thành công");
							}else{
								alert("Đăng ký thất bại");
							}
						}
					});
				}
			}
		});
	}
}
function Hidden(){
	document.getElementById("taotk").setAttribute("style", "display:show");
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
	temp="index.php?cmd=laysoluongyeucau";
	$.ajax({type: 'GET',url: temp,success:function(data){
		obj=JSON.parse(data);
		document.getElementById('soluong').innerHTML=obj.SoLuong;
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