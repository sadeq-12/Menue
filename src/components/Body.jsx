
import Product from "./product"

function Body(){
   return <div className=" grid sm:grid-cols-2  grid-rows-2 " >
    <Product  title= "South Africa" des="free delivery" price= "$50" src="https://img.freepik.com/free-photo/sliced-ham-cheese-vegetables-with-jam_140725-6460.jpg?t=st=1721563951~exp=1721567551~hmac=e788ffd0628fdbf11383cd729eabbc601c5c2a1415ac0485aee792f029467f25&w=740"  />
    <Product  title= "Yeman"  des="free delivery"   price= "$30"   src= "  https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?t=st=1721641266~exp=1721644866~hmac=c7368d31f6cc9ee58b6c41fe03e3af8cad6356dfde36f2a93a6b013239653363&w=900"/>
    <Product  title= "South Sudan"  des="free delivery"   price= "$20"   src= "https://img.freepik.com/free-photo/fresh-homemade-chicken-tacos-recipe-idea_53876-105982.jpg?t=st=1721641337~exp=1721644937~hmac=8d86bea9aec178b8d208203f265e94d5d66cf77047b6d458791ddd9a36d8f191&w=740" />
    <Product  title= "Somalia"   des="free delivery"  price= "$1"   src= "    https://img.freepik.com/free-photo/top-view-table-full-delicious-food-assortment_23-2149141339.jpg?t=st=1721641353~exp=1721644953~hmac=a285644cfcd2dd7aaa74237ab1859d6991ccc207e2b1885f85a588aa4d1b4ba9&w=900" />
    <Product  title= "Saudi Arabic"    des="free delivery" price= "$10"   src=  "  https://img.freepik.com/premium-photo/delicious-grilled-burgers_62847-14.jpg?w=900"  />
    <Product  title= "India"   des="free delivery"  price= "$5"   src="https://img.freepik.com/premium-photo/blue-plate-with-delicious-meat-vegetables-perfect-food-blogs-restaurant-menus_153912-159127.jpg?w=1060"  />
    
   </div>

}

export default Body