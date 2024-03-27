import React from 'react'

const CardSmall = ({icon, title, desc}) => {
  return (
    <div className="bg-white rounded-lg  flex flex-col gap-2 w-[150px] h-[250px] p-2">
    <img src= {icon} className="w-12 " />
    <h5 className="font-semibold text-sm">
     {title}
    </h5>
    <p className="text-sm">
   {desc}
    </p>
  </div>
  )
}

export default CardSmall