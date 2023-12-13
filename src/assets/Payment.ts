export interface IPayment {
  QRCode: string;
  title: string;
  code: string;
  address: string;
  isETH: boolean;
}

export const PaymentData: IPayment[] = [
  {
    QRCode: '/images/btc.jpeg',
    title: 'Bitcoin',
    code: 'BTC',
    isETH: false,
    address: 'bc1qrd97fut8l7jnvtmemfmutzltn38g9wh8e8kqye',
  },
  {
    QRCode: '/images/eth.jpeg',
    title: 'Ethereum',
    code: 'ETH',
    isETH: true,
    address: '0xe1DD7b085EbDeCa387770D0b5d701702f37b7303',
  },
  {
    QRCode: '',
    title: '',
    code: 'BNB',
    isETH: true,
    address: '0xe1DD7b085EbDeCa387770D0b5d701702f37b7303',
  },
  {
    QRCode: '/images/bch.jpeg',
    title: 'Bitcoin Cash',
    code: 'BCH',
    isETH: false,
    address: 'qzj2dgdfwd9f8rz9a8c06u7jen4ef2gzjywz20883p',
  },
  {
    QRCode: '/images/USDT.jpeg',
    title: 'Tether',
    code: 'USDT',
    isETH: true,
    address: '0xe1DD7b085EbDeCa387770D0b5d701702f37b7303',
  },
  {
    QRCode: '/images/MATIC.jpeg',
    title: 'Matric',
    code: 'MATIC',
    isETH: true,
    address: '0xe1DD7b085EbDeCa387770D0b5d701702f37b7303',
  },
  {
    QRCode: '/images/APE.jpeg',
    title: 'ApeCoin',
    code: 'APE',
    isETH: true,
    address: '0xe1DD7b085EbDeCa387770D0b5d701702f37b7303',
  },
  {
    QRCode: '/images/SHIB.jpeg',
    title: 'SHIBA INU',
    code: 'SHIB',
    isETH: true,
    address: '0xe1DD7b085EbDeCa387770D0b5d701702f37b7303',
  },
  {
    QRCode: '/images/DOGE.jpeg',
    title: 'Dogecoin',
    code: 'DOGE',
    isETH: false,
    address: 'DL2BB9gFn9ntTZy2PRhc41gZX21ksSeeV6',
  },
  {
    QRCode: '/images/USDC.jpeg',
    title: 'USD Coin',
    code: 'USDC',
    isETH: false,
    address: 'TWDfuUoxjBrvoyruQ1SYgPhh6cMBQjZ6LB',
  },
  {
    QRCode: '/images/DAI.jpeg',
    title: 'Dai',
    code: 'DAI',
    isETH: true,
    address: '0xe1DD7b085EbDeCa387770D0b5d701702f37b7303',
  },
  {
    QRCode: '/images/LTC.jpeg',
    title: 'Litecoin',
    code: 'LTC',
    isETH: false,
    address: 'ltc1qr4d9pf6kkgcq378lcdkn08f3gnyl4tzs3pxd4t',
  },
];
