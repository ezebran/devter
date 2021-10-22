import Navbar from './Navbar'
import Head from 'next/head'

export const Layout: React.FC = ({ children }) => (
    <>
      <Head>
        <title>Aeroshop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar />
        <h1>layout</h1>
        {children}

        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

        *{
            margin: 0;
            padding:0;
            box-sizing: border-box;
            font-family: 'Source Sans Pro', sans-serif;
            font-weight:400;
            text-decoration:none;
            list-style:none;
        }`}</style>
    </>
)