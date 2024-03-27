import React from "react";

const Header = () => {
  return (
    <div className=" sm:mt-24 lg:mt-8 lg:flex justify-between mb-16 lg:mb-24 ">
      <div className="flex flex-col gap-4 sm:w-[500px]  ">
        <h1 className="text-2xl font-semibold text-slate-600 sm:text-5xl">
          Buah dan sayur pilihan dari petani lokal dengan{" "}
          <span className="text-green-500">kualitas terbaik</span>
        </h1>
        <p className="text-sm sm:text-xl text-slate-500">
          Nikmati Rasa Alam yang Autentik, dengan Buah & Sayuran Segar dari
          Petani Lokal
        </p>
        <div>
          <button className="bg-red-400 text-white px-6 rounded-full py-2 hover:bg-red-200 sm:px-8  sm:text-xl">
            order now
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-12 gap-4 ">
        <div className="col-span-6">
          <img
            src="https://images.unsplash.com/photo-1609842947419-ba4f04d5d60f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="gambar sayur dan buah"
            className="w-full h-[340px] object-cover rounded-xl "
          />
        </div>
        <div className="col-span-6 ">
          <img
            src="https://images.unsplash.com/photo-1546069901-5ec6a79120b0?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="gambar makanan sehat"
            className="w-full object-cover rounded-xl mb-4 h-40 "
          />
          <img
            src="https://images.unsplash.com/photo-1610415946201-295954703dd9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="gambar makanan sehat"
            className="w-full object-cover rounded-xl h-40 "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
