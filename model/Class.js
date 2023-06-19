class Person {
  constructor() {
    this.tenNguoiDung = "";
    this.maDoiTuong = "";
    this.email = "";
    this.diaChi = "";
  }
}
class Student extends Person {
  constructor() {
    super(tenNguoiDung, maDoiTuong, email, diaChi);
    this.toan = "";
    this.ly = "";
    this.hoa = "";
  }
  diemTrungBinh() {
    return (this.toan * 1 + this.ly * 1 + this.hoa * 1) / 3;
  }
}
class Employee extends Person {
  constructor() {
    super(tenNguoiDung, maDoiTuong, email, diaChi);
    this.soNgayLam = "";
    this.luongTheoNgay = "";
  }
}
class Customer extends Person {
  constructor() {
    super(tenNguoiDung, maDoiTuong, email, diaChi);
    this.tenCongTy = "";
    this.triGiaHoaDon = "";
    this.danhGia = "";
  }
}
const res = { Person, Employee, Customer, Student };
export default res;
