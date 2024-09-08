import Link from "next/link";
import type { NextPage } from "next";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Product Verification</span>
          </h1>
          <p className="text-center text-lg">
            Welcome to my product verification project. This project is a proof of concept for a product verification
            system using blockchain technology. The project is built using Scaffold-eth-2.
          </p>
        </div>

        <div className=" justify-center items-center flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col ">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <p>To verify your product, use the the box below to type in the barcode of your item </p>
            </div>
            <div className="flex justify-center flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <input
                type="text"
                placeholder="Enter barcode"
                className="text-black border-2 border-primary rounded-lg p-4"
              />
              <Link href="/verify">
                <button className="bg-primary text-white p-4 mt-4 rounded-lg">Verify Product</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
