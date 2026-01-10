"use client";
import logo from "@/assets/logo/logo.png";
import {
  InstagramOutlined,
  MailOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaLocationPinLock,
  FaXTwitter,
} from "react-icons/fa6";

const thirdRow = [
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Clinic List",
    link: "/clinic-list",
  },
  {
    title: "Service",
    link: "/service",
  },
  {
    title: "Subscription",
    link: "/subscription",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];
const Footer = () => {
  return (
    <div>
      {/* top  */}
      <div className="bg-primary py-20">
        <div className="container">
          <div className=" grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* col 1 */}
            <div className="flex flex-col gap-6">
              <div className="h-24 w-72 ">
                <Image
                  src={logo}
                  className="object-contain"
                  height={400}
                  width={400}
                  alt="image"
                />
              </div>
              <p className="text-gray-light text-lg font-semibold">
                ClinicaDigitala
              </p>
              <div className="flex flex-col gap-4">
                {/* flex content */}
                <div className="flex items-start gap-4 text-white">
                  <div className="bg-white p-2 rounded-full text-white">
                    <FaLocationPinLock className="text-primary" size={18} />
                  </div>
                  <p className="mt-1">
                    Calea București 251, Brașov 500299, Romania
                  </p>
                </div>
                {/* flex content */}
                <div className="flex items-start gap-4 text-white">
                  <div className="bg-white p-2 rounded-full text-white">
                    <PhoneFilled className="text-primary" size={18} />
                  </div>
                  <p className="mt-1">123-456-7890</p>
                </div>
                {/* flex content */}
                <div className="flex items-start gap-4 text-white">
                  <div className="bg-white p-2 rounded-full text-white">
                    <MailOutlined className="text-primary" size={18} />
                  </div>
                  <p className="mt-1">user@gmail.com</p>
                </div>
              </div>
            </div>

            {/* col 2 */}
            <div className="flex flex-col gap-6">
              {thirdRow?.map((item, i) => (
                <Link href={item?.link} key={i} className=" inline-block w-fit">
                  <div className="cursor-pointer text-white hover:text-tomato ">
                    {item?.title}
                  </div>
                </Link>
              ))}
            </div>

            {/* col 3 */}
            <div className="text-white">
              <p className="text-md font-bold mb-6">Do you have a Clinic?</p>
              <p className="text-md font-medium mb-6">Become a Partner</p>
              {/* get is touch  */}
              <div className="mt-16">
                <p className="text-md font-normal mb-6">Follow Us</p>

                <div className="flex items-center gap-5">
                  <div className="bg-transparent hover:bg-secondary duration-300 p-2 rounded-full border border-white">
                    <FaXTwitter className="text-white" size={18} />
                  </div>
                  <div className="bg-transparent hover:bg-secondary duration-300 p-2 rounded-full border border-white">
                    <FaFacebook className="text-white" size={18} />
                  </div>
                  <div className="bg-transparent hover:bg-secondary duration-300 p-2 rounded-full border border-white">
                    <InstagramOutlined className="text-white" size={18} />
                  </div>
                  <div className="bg-transparent hover:bg-secondary duration-300 p-2 rounded-full border border-white">
                    <FaGithub className="text-white" size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom  */}
      <div className="bg-secondary py-5">
        <div className="container flex flex-col md:flex-row items-center justify-between text-white">
          <div>
            <ul className="list-disc flex items-center gap-5 space-x-6 flex-wrap">
              <li>
                <Link href={"#"} className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href={"#"} className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={"#"} className="hover:underline">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            © 2024 – 2029 Dariustodirascu Medical & Healthcare all rights
            reserved.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
