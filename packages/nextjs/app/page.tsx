"use client";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BoltIcon, BookOpenIcon, BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 bg-taiko-gradient">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2 text-white">Welcome to</span>
            <span className="block text-4xl font-bold text-white">Scaffold-ETH-Taiko</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium text-white">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          <p className="text-center text-lg text-white">
            Get started by editing{" "}
            <code className="italic bg-taiko-purple bg-opacity-30 text-white text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/app/page.tsx
            </code>
          </p>
          <p className="text-center text-lg text-white">
            Edit your smart contract{" "}
            <code className="italic bg-taiko-purple bg-opacity-30 text-white text-base font-bold max-w-full break-words break-all inline-block">
              YourContract.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-taiko-purple bg-opacity-30 text-white text-base font-bold max-w-full break-words break-all inline-block">
              packages/hardhat/contracts
            </code>
          </p>
        </div>
        <div className="flex-grow w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-taiko-purple bg-opacity-20 border-taiko-pink border rounded-xl px-10 py-10 text-center items-center max-w-xs">
              <BoltIcon className="h-8 w-8 text-white" />
              <p className="text-white">
                Get testnet funds from the{" "}
                <Link href="https://bridge.hekla.taiko.xyz/" passHref className="text-white underline hover:opacity-80">
                  Taiko Faucet
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col bg-taiko-purple bg-opacity-20 border-taiko-pink border rounded-xl px-10 py-10 text-center items-center max-w-xs">
              <BugAntIcon className="h-8 w-8 text-white" />
              <p className="text-white">
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="text-white underline hover:opacity-80">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-taiko-purple bg-opacity-20 border-taiko-pink border rounded-xl px-10 py-10 text-center items-center max-w-xs">
              <MagnifyingGlassIcon className="h-8 w-8 text-white" />
              <p className="text-white">
                Explore your local transactions with the{" "}
                <Link href="https://hekla.taikoscan.io/" passHref className="text-white underline hover:opacity-80">
                  Taiko Explorer
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col bg-taiko-purple bg-opacity-20 border-taiko-pink border rounded-xl px-10 py-10 text-center items-center max-w-xs">
              <BookOpenIcon className="h-8 w-8 text-white" />
              <p className="text-white">
                Learn more about{" "}
                <Link href="https://docs.taiko.xyz" passHref className="text-white underline hover:opacity-80" target="_blank">
                  Taiko
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;