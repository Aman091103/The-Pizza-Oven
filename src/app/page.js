import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
       <Hero />
       <HomeMenu />
       <section className= "text-center my-16" id="about">
       <SectionHeaders
          subHeader={'Our Story'}
          mainHeader={'About us'}
        />
        <div className="max-w-2xl text-gray-500 mx-auto mt-4 flex flex-col gap-4">
          <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat.
          </p>
          <p >
           ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat.
          </p>
          <p >
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat.
          </p>
        </div> 
       </section>
       <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don\'t hesitate"}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className= "text-4xl text-gray-500" href="+91 123 123 1234">
            +91 123 123 1234
          </a>
        </div>
       </section>
    </>
  );
}
