import Image from "next/image";
import Link from "next/link";
import Logo from "../public/Logo.webp";
import twitIcon from "../public/social/Twitter.webp";
import linkIcon from "../public/social/linkedin.webp";

const FooterLink = ({ linkName }) => {
  return (
    <a href="#" className="text-gray-400 hover:text-[#0FDCC2]">
      {linkName}
    </a>
  );
};

export default function Footer() {
  return (
    <div className="bg-vision p-8 lg:p-12 lg:flex lg:flex-row lg:justify-between
    ">
      <div className="">
        <Image src={Logo} width={218} height={36} alt="Logo" />
        <p className="font-fontDM pt-2">
          A blockchain-based gaming NFT lending and borrowing platform. Allowing
          players,<br /> lenders and guilds to lend & borrow NFTs in a trustless
          manner.
        </p>
      </div>

      <div className="flex flex-col font-fontDM pt-8">
        <h2 className="font-bold font-xl">Company</h2>
        <FooterLink linkName="Home" />
        <FooterLink linkName="About" />
        <FooterLink linkName="Vision" />
        <FooterLink linkName="News" />
      </div>

      <div className="flex flex-col font-fontDM pt-8">
        <h2 className="font-bold font-xl">Follow Us</h2>
        <span className="flex flex-row items-center">
          <Image src={twitIcon}  width={24} height={24} alt="twit" />
          <FooterLink linkName="Twitter" />
        </span>
        <span className="flex flex-row items-center">
          <Image src={linkIcon} width={24} height={24}  alt="link" />
        <FooterLink linkName="Linkedin" />
        </span>
      </div>


      <div className="flex flex-col font-fontDM pt-8 pb-4">
      <h2 className="font-bold font-2xl pb-4">Signup for the Newsletter</h2>
      <input type="text" className="rounded-lg"/>
      <button className="bg-[#374A5E] mt-4 rounded-lg">Sign up</button>
      </div>
    </div>
  );
}
