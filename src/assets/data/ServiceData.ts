interface Services {
  id: number;
  category: string;
  text: string;
  services: Service[];
}

interface Service {
  title: string;
  image: string;
}

export const SERVICE_PREVIEW = [
  {
    title: 'Social Media Marketing',
    image: '/images/social media.png',
    category: 'Digital Marketing',
  },
  {
    title: 'Event Marketing',
    image: '/images/event marketinf.png',
    category: 'Creative Marketing',
  },
  {
    title: 'Data audits',
    image: '/images/data audits.png',
    category: 'Business Analytics',
  },
  {
    title: 'Cloud management',
    image: '/images/cloud management.png',
    category: 'Business Analytics',
  },
  {
    title: 'Web Design',
    image: '/images/web design.png',
    category: 'Digital Marketing',
  },
  {
    title: 'Bill Boards Adverts',
    image: '/images/bill borad.png',
    category: 'Creative Marketing',
  },
];

export const SERVICE_DATA: Services[] = [
  {
    id: 2,
    category: 'Creative Marketing',
    text: 'We work with brands to create and execute marketing strategies across multiple communication channels.',
    services: [
      { title: 'Event Marketing', image: '/images/event marketinf.png' },
      { title: 'Branding', image: '/images/branding.png' },
      {
        title: 'Bill Boards Adverts',
        image: '/images/bill borad.png',
      },
    ],
  },
  {
    id: 3,
    category: 'Business Analytics',
    text: 'We work with brands to handle data, checking it, understanding it, and keeping it cloud-friendly.',
    services: [
      { title: 'Data audits', image: '/images/data audits.png' },
      { title: 'Data analysis', image: '/images/data analysis.png' },
      {
        title: 'Cloud management',
        image: '/images/cloud management.png',
      },
    ],
  },
  {
    id: 1,
    category: 'Digital Marketing',
    text: 'We help brands achieve their marketing goals through digital media and technologies.',
    services: [
      {
        title: 'Social Media Marketing',
        image: '/images/social media.png',
      },
      {
        title: 'Influencer Marketing',
        image: '/images/influenceer market.png',
      },
      {
        title: 'Search Engine Marketing',
        image: '/images/search engine.png',
      },
      {
        title: 'Social Media Management',
        image: '/images/social media managemnet.png',
      },
      {
        title: 'Content Marketing',
        image: '/images/content marketing.png',
      },
      {
        title: 'Online Reputation Management (ORM)',
        image: '/images/orm.png',
      },
      { title: 'Web Design', image: '/images/web design.png' },
      { title: 'Graphic Designs', image: '/images/graphics design.png' },
      {
        title: 'Leads Conversion',
        image: '/images/leads convention.png',
      },
    ],
  },
];
