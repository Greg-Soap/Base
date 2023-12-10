import React from 'react';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import footerLinks from '@/assets/data/FooterLinks';
import { Input } from './ui/input';
export default function Footer() {
  const socials = [
    {
      id: '1',
      icon: <InstagramIcon className="text-primary" />,
      slug: 'https://www.instagram.com/tryvetech/',
    },
    {
      id: '1',
      icon: <TwitterIcon className="text-primary" />,
      slug: 'https://twitter.com/tryveNig',
    },
    {
      id: '1',
      icon: <FacebookIcon className="text-primary" />,
      slug: 'https://web.facebook.com/TryveTech/',
    },
  ];
  return (
    <footer className="w-full bg-black">
      <div className="flex flex-col gap-16  pt-14 text-white">
        <div className="container flex flex-col items-center justify-between max-md:items-start max-md:gap-4 md:flex-row">
          <div className="flex flex-col  gap-5">
            <img src="/images/logo2.png" alt="logo" width={135} height={135} />
            <p className="text-base">Your Gateway to Digital Success!</p>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <Link
                  key={s.id}
                  href={s.slug}
                  target="_blank"
                  className="rounded-[10px] bg-secondary bg-opacity-20 p-[5px]"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-6 max-md:flex-col lg:gap-12">
            {footerLinks.map((column) => (
              <div key={column.column}>
                <h2 className="mb-4 font-google text-base font-bold capitalize text-white">
                  {column.data.leadText}
                </h2>
                <ul>
                  {column.data.items.map((item, index) => (
                    <li key={index} className="mb-4">
                      <Link
                        href={item.slug}
                        className="text-sm font-medium leading-[28px] text-white opacity-70 hover:underline"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex w-full flex-col gap-8 sm:w-[340px]">
              <div className="flex flex-col gap-[18px]">
                <h2 className="font-google font-bold">
                  SUBSCRIBE TO OUR NEWSLETTER
                </h2>
                <Input
                  placeholder="Get Weekly Updates"
                  className="border border-white border-opacity-20 bg-transparent "
                />
              </div>
              <div className="flex flex-col gap-[18px]">
                {/* <h2 className="font-google font-bold">Address</h2> */}
                <p className="text-sm font-light">
                  Course content of our recently just (Mastering Social Media
                  Management) Power Class is available at a giveaway price
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20">
          <p className="container py-6">
            All © Copyright Reserved. {new Date().getFullYear()} TRYVETECH
          </p>
        </div>
      </div>
    </footer>
  );
}
