import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />
        <div className="max-w-2xl text-gray-500 mx-auto mt-4 flex flex-col gap-4">
          <p>
            Welcome to The Pizza Oven, your go-to destination for effortless
            food ordering. We bring together a wide variety of cuisines,
            ensuring that your favorite meals are just a few clicks away.
          </p>
          <p>
            Our platform is designed for convenience, offering a seamless
            ordering experience, secure Google authentication, and real-time
            order tracking. Whether you're craving something spicy, sweet, or
            savory, we’ve got you covered.
          </p>
          <p>
            Enjoy fresh, delicious food delivered fast. Order now and experience
            a hassle-free way to satisfy your cravings!
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a className="text-4xl text-gray-500" href="+91 123 123 1234">
            +91 123 123 1234
          </a>
        </div>
      </section>
    </>
  );
}
