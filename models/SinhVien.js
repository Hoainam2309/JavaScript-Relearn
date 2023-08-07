function SinhVien() {
    this.maSinhVien = 0;
    this.tenSV = "";
    this.email = '';
    this.matKhau = '';
    this.ngaySinh = 0;
    this.khoaHoc = '';
    this.diemToan = 0;
    this.diemLy =0;
    this.diemHoa = 0;
    this.diemTrungBinh = function() {
        let dtb = 0;
            dtb = (Number(this.diemToan) + Number(this.diemLy)+ Number(this.diemHoa)) / 3;
        return dtb;
    };
   
}

