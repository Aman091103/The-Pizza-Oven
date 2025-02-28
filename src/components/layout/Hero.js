'use client';
import Image from "next/image";
import Right from "../icons/Right";
import { useRouter } from "next/navigation";
export default function Hero() {
  const router = useRouter();

  const handleOrderNowClick = () => {
    router.push("/menu");
  };

  const handleLearnMoreClick = () => {
    router.push("/#about");
  };

  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br />
          is better <br />
          with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life.
        </p>
        <div className="flex gap-4 text-sm">
          <button
            onClick={handleOrderNowClick}
            className="bg-primary justify-center uppercase items-center flex gap-2 text-white px-4 py-2 rounded-full"
          >
            Order Now
            <Right />
          </button>
          <button
            onClick={handleLearnMoreClick}
            className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold"
          >
            Learn More
            <Right />
          </button>
        </div>
      </div>

      <div className="relative hidden md:block">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"Pizza"}
        />
      </div>
    </section>
  );
}
