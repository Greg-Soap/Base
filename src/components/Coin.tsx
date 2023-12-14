import React from 'react';

export default function Coin({ data, Wallet }: any) {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-2">
      {data.map((coin: any, idx: any) => (
        <div
          key={idx}
          onClick={() => Wallet(coin.code)}
          className="flex w-full items-center justify-between rounded-full bg-muted-foreground p-2 hover:bg-gray-300 min-[465px]:w-[48%] min-[672px]:w-[32%] min-[880px]:w-[24%] lg:w-[48%]  "
        >
          <div className="flex items-center gap-1">
            <img src={coin.image} alt={coin.title} className="h-6 w-6" />{' '}
            <p className="text-sm">{coin.title}</p>
          </div>
          <div className="pr-2 text-sm uppercase text-muted">{coin.code}</div>
        </div>
      ))}
    </div>
  );
}
export const gateway = [
  { image: '/images/bitcoin.png', title: 'Bitcoin', code: 'BTC' },
  { image: '/images/etheruem.png', title: 'Ethereum', code: 'ETH' },
  { image: '/images/usd coin.png', title: 'USD Coin', code: 'USDC' },
  { image: '/images/dodgecoin.png', title: 'Dogecoin', code: 'DOGE' },
  { image: '/images/litecoin.png', title: 'Litecoin', code: 'LTC' },
  { image: '/images/dai.png', title: 'Dai', code: 'DAI' },
  {
    image: '/images/bitcoin cash.png',
    title: 'Bitcoin Cash',
    code: 'BCH',
  },
  { image: '/images/apecoin.png', title: 'ApeCoin', code: 'APE' },
  { image: '/images/shiba inu.png', title: 'SHIBA INU', code: 'SHIB' },
  { image: '/images/tether.png', title: 'Tether', code: 'USDT' },
];
export const gatewayPolygon = [
  {
    image: '/images/usdc-polygon.png',
    title: 'USD Coin',
    code: 'USDC',
  },
  {
    image:
      '/images/57f28803aad363f419a950a5f5b99acfd4fba8b683c01b9450baab43c9fa97ea.png',
    title: 'Matric',
    code: 'MATIC',
  },
  {
    image: '/images/usdc-polygon.png',
    title: 'Bridged USD Coin',
    code: 'USDC',
  },
  { image: '/images/eth-polygon.png', title: 'Wrapped Ether', code: 'ETH' },
];
