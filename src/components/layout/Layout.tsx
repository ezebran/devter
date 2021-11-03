import Navbar from './Navbar'
import Banner from './Banner'
import Head from 'next/head'
import {GlobalStyles} from '@/styles/GlobalStyles'

export const Layout: React.FC = ({ children }) => (
    <>
      <Head>
        <title>Aeroshop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar />
        <Banner />
        <h1>layout</h1>
        {children}

        <GlobalStyles />
    </>
)