import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import './globals.css';

const garamond = EB_Garamond({ variable: '--font-garamond', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://salesnego.com'),
  title: 'SalesNego | B2B SaaS GTM, RevOps & Sales Execution',
  description: 'SalesNego helps B2B SaaS, AI and technology companies build GTM strategy, Revenue Operations and full-cycle commercial execution from market entry through closing and account growth.',
  alternates: { canonical: '/' },
  openGraph: { title: 'SalesNego | B2B SaaS GTM, RevOps & Sales Execution', description: 'Founder-led commercial execution from market intelligence through account growth.', url: 'https://salesnego.com/', siteName: 'SalesNego', type: 'website' },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={garamond.variable}>{children}</body></html>;
}
