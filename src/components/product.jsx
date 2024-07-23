function Product({title ,des , price , src}){
  // console.log(props)
    return <div className="flex gap-4 py-2 px-4 ">
      <img className=" h-[150px] w-[200px] sm:w-[200px] sm:h-[150px] rounded " src={src} alt="" />
     <div className="">
      <h1 className="text-[20px] font-bold pb-2">{title}</h1>
      <p className="text-[15px] pb-3 ">{des}</p>
      <h1 className="text-[15px] pb-3">{price}</h1>
      <button className="bg-yellow-400 py-2 px-4 rounded-[8px]">Order now</button>
     </div>
    </div>
     
  }
  export default Product