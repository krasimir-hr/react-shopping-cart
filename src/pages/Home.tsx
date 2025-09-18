import NavBar from "../components/NavBar";
import forest from "../assets/forest.jpg"


export default function Home() {
   return (
      <div className="flex w-full">
         <div className="w-3/5 bg-[#c19d78] text-black">
            <div>
               <h1 className="font-heading text-[120px] font-semibold text-center my-32">befitting.</h1>
               <div>
                  <p className="font-body text-[30px] text-center">Introducing The Harmonious Clothing</p>
                  <div className="text-center">
                     <a href="#" className="font-menu text-[13px]">
                        ENTER THE SHOP →
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <div className="w-[55%] h-screen bg-cover" style={{ backgroundImage: `url(${forest})`}}></div>
      </div>
   );
}
