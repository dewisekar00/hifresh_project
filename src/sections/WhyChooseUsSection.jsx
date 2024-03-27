import React from "react";
import CardSmall from "../component/CardSmall";

const WhyChooseUsSection = () => {
  return (
    <>
      <div>
        <h5 className="text-center rounded-full    font-semibold  text-green-500 py-8 text-xl">
          Why choose us?
        </h5>
        <div className="flex flex-wrap   gap-4 justify-center bg-green-100 py-16">
          <CardSmall
            icon="map-icon.svg"
            title="Track Delivery With Map Coverage"
            desc="As we believe in consumers trust - you can track service"
          />
          <CardSmall
            icon="delivery-icon.svg"
            title="Fast delivery service"
            desc="Get delivery fastest ever enjoy fresness of the groceries"
          />
          <CardSmall
            icon="click-tap-icon.svg"
            title="Easy order"
            desc="Order in a handy way using Grocen app or website from your device"
          />
          <CardSmall
            icon="fruit-icon.svg"
            title="freshness is no. 1"
            desc="we always make sure buyer satisfaction comes first"
          />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsSection;
