import Image from "next/image";
import { Contact, Socials } from "./details";
import Menu from "./details/menu";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-10">
      {/* <div className="container flex flex-col"> */}
      {/* <div className="flex items-center justify-center sm:justify-between py-3 sm:py-5">
          <Contact isMobile={true} />
          <Socials isMobile={true} lang={true} />
        </div> */}
      <div className="flex items-center justify-between bg-black bg-opacity-30 backdrop-blur-md py-3 px-5 sm:px-10">
        <div className="container flex items-center justify-between">
          <a href="/" className="w-[100px]" title="Halol Avto Lizing">
            <img
              src={"/images/logo.png"}
              layout="responsive"
              width={"100px"}
              height={"60px"}
            />
          </a>
          <Menu />
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}
