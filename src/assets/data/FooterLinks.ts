type FooterItem = {
  title: string;
  slug: string;
};

type FooterColumn = {
  leadText: string;
  items: FooterItem[];
};

type FooterLink = {
  column: number;
  data: FooterColumn;
};

const footerLinks: FooterLink[] = [
  {
    column: 1,
    data: {
      leadText: '',
      items: [
        { title: 'About us', slug: '/about' },
        { title: 'Our Services', slug: '/services' },
        { title: 'Power Class', slug: '/class' },
        { title: 'Blog', slug: '#' },
      ],
    },
  },
  {
    column: 2,
    data: {
      leadText: '',
      items: [
        { title: 'Privacy Policy', slug: '#' },
        { title: 'Terms and Conditions', slug: '#' },
        { title: 'Insights', slug: '#' },
        { title: 'Career', slug: '#' },
      ],
    },
  },
];

export default footerLinks;
