function SinhVien() {
    this.maSinhVien = '';
    this.hoten = '';
    this.loaiSinhVien = '';
    this.diemToan = 0;
    this.diemVan = 0;
    diemTrungBinh = function() {
        let dTB = 0;
        dTB = (Number(this.diemToan) + Number(this.diemVan)) / 2
        return dTB
    };
    xepLoai = function () {
    
        let diemTB = this.diemTrungBinh();
        let xepLoai = '';
        if(diemTB >= 5) {
            xepLoai = 'pass';
        }else {
            xepLoai = 'cut';
        }
        return xepLoai;
    };
}

let sinhVien1 = new SinhVien();
console.log(sinhVien1);

let sinhVien3 = new SinhVien();
console.log(sinhVien3);