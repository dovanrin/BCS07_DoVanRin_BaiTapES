class Listperson {
  constructor() {
    class Person {
      constructor() {
        this.hoTen = "";
        this.maDoiTuong = "";
        this.email = "";
        this.diaChi = "";
      }
    }
    class Student extends Person {
      constructor() {
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
        this.soNgayLam = "";
        this.luongTheoNgay = "";
      }
    }
    class Customer extends Person {
      constructor() {
        this.tenCongTy = "";
        this.triGiaHoaDon = "";
        this.danhGia = "";
      }
    }
  }
}
