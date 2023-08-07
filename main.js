window.onload = function () {
    let sinhVien = {
        maSinhVien: '',
        hoten:'',
        loaiSinhVien : '',
        diemToan: 0,
        diemVan: 0,
        diemTrungBinh : function() {
            let dTB = 0;
            dTB = (Number(this.diemToan) + Number(this.diemVan)) / 2
            return dTB
        },
        xepLoai : function () {
    
            let diemTB = this.diemTrungBinh();
            let xepLoai = '';
            if(diemTB >= 5) {
                xepLoai = 'pass';
            }else {
                xepLoai = 'cut';
            }
            return xepLoai;
        }
    
    }
    
    
    let btnXuatThongTin = document.querySelector('#xuatThongTin');
    btnXuatThongTin.onclick = function() {
        sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
        sinhVien.hoten=document.querySelector("#tenSinhVien").value ;
        sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
        sinhVien.diemToan = document.querySelector('#diemToan').value;
        sinhVien.diemVan = document.querySelector('#diemVan').value;
      
    
    
        document.querySelector('#txtTen').innerHTML = sinhVien.maSinhVien;
        document.querySelector('#txtMa').innerHTML = sinhVien.hoten;
        document.querySelector('#txtLoai').innerHTML = sinhVien.loaiSinhVien;
        document.querySelector('#txtTen').innerHTML = sinhVien.maSinhVien;
    
        diemTrungBinh = sinhVien.diemTrungBinh();
        document.querySelector('#txtDiemTB').innerHTML = diemTrungBinh;
        xepLoai = sinhVien.xepLoai();
        document.querySelector('#txtXepLoai').innerHTML = xepLoai;
    
    
    
    }
}

