import React from "react";

const ValueSection = () => {
  return (
    <>
      <div className="h-screen mt-32 p-8 lg:flex gap-8">
        <img
          src="https://images.pexels.com/photos/4393436/pexels-photo-4393436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="vegetables"
          className="w-full h-64 object-cover rounded-xl mb-4 lg:h-80"
        />
        <div className="border border-green-500 rounded-xl p-4 lg:h-80 lg:w-[800px] flex flex-col items-center justify-center">
          <h5 className="text-green-500 font-semibold text-xl mb-4 lg:text-4xl ">
            Fresh Groceries Straight To You Door Step Whenever You want
          </h5>
          <p className="text-sm lg:text-lg">
            We ave got tons of food delivery service apps sites start up around
            us - still now grocery is yet to be a trusted service which has a
            lot scope to help others. We have come with one
          </p>
        </div>
      </div>
    </>
  );
};

export default ValueSection;
