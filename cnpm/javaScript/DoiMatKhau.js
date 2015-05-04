var user=sessionStorage.getItem("tendangnhap");
function DoiMatKhau () {
	var MatKhauHienTai=document.getElementById("matkhaucu").value;
	var MatKhauMoi=document.getElementById("matkhaumoi").value;
	if(document.getElementById("matkhaumoi").value==""||document.getElementById("matkhaucu").value==""||document.getElementById("nhaplaimatkhau").value==""){
		alert("Bạn phải nhập đầy đủ thông tin");
	}else if(document.getElementById("matkhaumoi").value!=document.getElementById("nhaplaimatkhau").value){
		alert("Mật khẩu không trùng nhau");
		document.getElementById("matkhaumoi").value="";
		document.getElementById("nhaplaimatkhau").value="";
	}else{
		$.ajax({type:'GET',url:"index.php?cmd=dangnhap&tendangnhap="+user+"&matkhau="+MatKhauHienTai,
			success:function  (data) {
				obj = JSON.parse(data);
				if(obj.id!="-1"){
					ChangePass(MatKhauMoi);
				}else{
					alert("Mật khẩu hiện tại không đúng");
					document.getElementById("matkhaucu").value="";
				}
			}
		});
	}
}
function ChangePass(pass)
{
	$.ajax({type:'GET',url:"index.php?cmd=doimatkhau&tendangnhap="+user+"&matkhau="+pass,
		success:function  (data) {
			obj = JSON.parse(data);
			if(obj.success==true){
				alert("Đổi mật thành công");
				sessionStorage.setItem("success", "false");
				window.location.href = "login.php";
			}else{
				alert("Đổi mật khẩu thất bại");
			}
		}
	});
}