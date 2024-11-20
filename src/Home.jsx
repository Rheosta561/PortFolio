import React from "react";
import Homeimg from "./IMG_0649.jpg";
import Profile from "./profile.jpeg"
function Home() {
  return (
    <>
      <div className="  h-52 shadow-sm bg-zinc-100 dark:bg-zinc-950 ">
        <div className="text-7xl text-zinc-950 dark:text-zinc-50 font-semibold items-end text-center pt-4  ">
          Greetings
        </div>
        <div className="text-center text-xl pt-2 font-semibold text-gray-800">
          PortFolio
        </div>
        <div className="text-center text-sm   text-gray-600">
          MERN Stack Developer
        </div>
        <div className="text-center text-sm   text-gray-600">
          Available For Work{" "}
        </div>
      </div>
      
      <div className=" h-fit bg-zinc flex items-center flex-col">
        <div className="bg-zinc-950 h-40 w-40 rounded-full scale-150 mt-12">
            <img src={Profile} alt="" className="h-full w-full border-zinc-950  shadow-sm rounded-full object-cover "/>
        </div>
        <div className="mt-10 font-medium text-xl text-emerald-950">Anubhav Mishra</div>
        <div className="-mt-1 text-sm text-gray-600"> </div>
        <div className="-mt text-xs text-gray-700 " ><a 
    href="tel:+1234567890" 
    className="text-gray-900 hover:underline"
  >
    +91 7303036689
  </a> </div>
  <div className="-mt text-xs text-gray-700 pb-5 " ><a 
    href="email:manubhav731@gmail.com" 
    className="text-zinc-800 hover:underline"
  >
    manubhav731@gmail.com
  </a> </div>
      </div>
    </>
  );
}

export default Home;
