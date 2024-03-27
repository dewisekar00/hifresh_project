import React from "react";

const Footer = () => {
  return (
    <>
      <hr />
      <div className=" h-64 m-4 my-24 lg:flex justify-center gap-16 items-center">
        <div className="lg:w-64  pt-8">
          <h1 className="text-green-500 font-bold text-xl mb-4">HiFresh</h1>
          <p className="text-sm text-slate-500">
            Sudah sejak 2016 HiFresh dipercaya untuk menjadi platfrom penyedia
            kebutuhan buah dan sayur, membantu memberdayakan petani dan umkm
            indonesia
          </p>
        </div>
        <div className=" mt-8 flex gap-16">
          <div>
            <h5 className="font-semibold text-lg">About us</h5>
            <div className="text-slate-500 text-sm">
              <p>About Us</p>
              <p>Career</p>
              <p>FAQ's</p>
              <p>Privacy Policy</p>
              <p>Terms & conditions</p>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-lg">Contact</h5>
            <div className="text-slate-500 text-sm">
              <p>jln Melati, No 01 , Jakarta</p>
              <p>info@hifresh.com</p>
              <p>+123 562 024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
