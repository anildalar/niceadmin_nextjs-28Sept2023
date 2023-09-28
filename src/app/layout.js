//

import '../../public/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../public/assets/vendor/boxicons/css/boxicons.min.css';
import '../../public/assets/vendor/quill/quill.snow.css';
import '../../public/assets/vendor/quill/quill.bubble.css';
import '../../public/assets/vendor/remixicon/remixicon.css';
import '../../public/assets/vendor/simple-datatables/style.css';
import '../../public/assets/css/style.css';

import './globals.css'

import { Inter } from 'next/font/google'
import Head from 'next/head';
import Script from "next/script";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard - NiceAdmin Bootstrap Template',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.jss" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
