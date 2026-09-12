import { Suspense } from "react";
import Banner from "./Component/Banner";
import Nav from "./Component/Nav";
import Technologies from "./Component/Technologies/Technologies";
import type { Technology } from "./types/types";
import Footer from "./Component/Footer";


const languagefetch =async (): Promise<Technology[]> =>{
  const response = await fetch ("/data.json")
  const data = await response.json()
  return data;
}
 const dataPromise = languagefetch()

function App() {


  return (
    <>
  



  <Nav /> 
  
 <Banner /> 
  
  
  <Suspense fallback={<div>Loading...</div>}>
   <Technologies dataPromise={dataPromise}/>
  </Suspense>
 
  <Footer />
  </>
  );
}

export default App;
