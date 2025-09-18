import pattern from '../assets/pattern.jpg';

export default function Footer() {
   return (
      <footer>
         <div className="bg-[#f1f1f0] h-[400px] flex justify-center gap-52 items-center">
            <h1 className="font-heading text-[42px] font-semibold text-center mb-5">befitting.</h1>
            <div>
               <p className='font-body text-[20px] mb-2'>Join Our Newsletter</p>
               <input type="text" placeholder='Your Email' className='border-[1px] border-black p-[7px] font-menu text-[12px] w-[220px]'/>
            </div>
            <div className='font-menu grid grid-rows-4 gap-5 text-[13px]'>
               <div>
                  <p>General Inquiry:</p>
                  <p>hello@befitting.com</p>
               </div>

               <div>
                  <p>Sales Inquiry:</p>
                  <p>sales@befitting.com</p>
               </div>

               <div>
                  <p>Phone:</p>
                  <p>012-345-6789</p>
               </div>

               <div>
                  <p>Say hi:</p>
                  <p>987-654-3210</p>
               </div>
            </div>
         </div>
      </footer>
   );
}
