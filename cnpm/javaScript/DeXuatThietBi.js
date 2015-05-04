var id=sessionStorage.getItem("id");
function GuiDeXuat () {
	var TenThietBi=document.getElementById("dx_tenthietbi").value;
	var TenVietTat=document.getElementById("dx_tenviettat").value;
	var TrangThai=document.getElementById("dx_trangthai").value;
	var ReadOnly=document.getElementById("dx_readonly").checked;
	ReadOnly=ReadOnly==true?"1":"0";
	if(TenThietBi==""||TenVietTat==""||TrangThai==""){
		alert("Bạn phải điền đủ thông tin");
	}else{
		//alert("id: "+id+" Ten thiet bi: "+TenThietBi+" Ten viet tat: "+TenVietTat+" Trang thai: "+TrangThai+" ReadOnly: "+ReadOnly);
		var temp="index.php?cmd=themyeucau&id_nguoitao="+id+"&tenthietbi="+TenThietBi+"&tenviettat="+TenVietTat+"&trangthai="+TrangThai+"&readonly="+ReadOnly;
		$.ajax({type: 'GET',url: temp,
			success:function(data){
				obj=JSON.parse(data);
				if(obj.success==true){
					document.getElementById("dx_tenthietbi").value="";
					document.getElementById("dx_tenviettat").value="";
					document.getElementById("dx_trangthai").value="";
					document.getElementById("dx_readonly").checked=false;
					alert("Yêu cầu đã được gửi!");
				}else{
					alert("Yêu cầu chưa gửi được!");
				}
			}
		});		
	}
}