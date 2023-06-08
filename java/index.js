// BÀI 1
// tính tiền lương

function tinhTongLuong() {
    let soLuong = document.getElementById("soLuong").value;

    let soNgay = document.getElementById("soNgay").value;

    tongLuong = 0 ;
    tongLuong = soLuong * soNgay; 

    document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();

}






// BÀI2
// Tính số trung binh 

function tinhTrungBinh()  {

    let so1 = document.getElementById("so1").value;
    let so2 = document.getElementById("so2").value;
    let so3 = document.getElementById("so3").value;
    let so4 = document.getElementById("so4").value;
    let so5 = document.getElementById("so5").value;

    let tongTrungBinh = ( Number(so1) +  Number(so2)+ Number(so3) + Number(so4) + Number(so5) ) / 5 ;
    
    
    document.getElementById("tongTrungBinh").innerHTML = tongTrungBinh;
    

}






//BÀI 3
// Quy đổi tiền USD 

function quyDoi() {
    let tienDo = document.getElementById("tienDo").value ;
    tongLuong = 0 ;
    tongTien = tienDo * 23500 ;


    document.getElementById("tongTien").innerHTML = tongTien.toLocaleString();
}



//BÀI 4
// Tính diện tích vs chu vi 

function tinh() {
    let chieuDai = document.getElementById("chieuDai").value;
    let chieuRong = document.getElementById("chieuRong").value;

    dienTich = 0 ;

    dienTich = chieuDai * chieuRong;


    chuVi = 0 ;

    chuVi = (Number(chieuDai) + Number(chieuRong)) * 2 ; 

    document.getElementById("dienTich").innerHTML = dienTich ;
    document.getElementById("chuVi").innerHTML = chuVi;


}



// BÀI 5
// Tính tổng 2 ký số


function tinhCong() {
    let kySo = document.getElementById("kySo").value;

    tongKySo = 0;

    tongKySo += kySo % 10;
    kySo = Math.floor(kySo / 10)
    
    tongKySo += kySo

    document.getElementById("tongKySo").innerHTML = tongKySo ;

}









