import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import products from "../products";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Albratross | Online Shopping Site</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className='flex w-full flex-1 flex-col items-center justify-center px-20'>
        <h1 className='text-3xl text-center font-bold my-3'>Latest Products</h1>
        <div className='grid gap-4 grid-cols-4 grid-rows-3 px-20'>
          {products.map((product) => (
            <div key={product._id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
