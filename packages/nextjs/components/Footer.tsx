import React from "react";
import Link from "next/link";
import { hardhat } from "viem/chains";
import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { Faucet } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";

// Simple Taiko Logo component
const TaikoLogo = ({ className }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 246 246" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M123 0C55.08 0 0 55.08 0 123C0 190.92 55.08 246 123 246C190.92 246 246 190.92 246 123C246 55.08 190.92 0 123 0ZM121.35 175.54C101.8 175.54 85.95 159.69 85.95 140.15C85.95 120.6 101.8 104.75 121.35 104.75C140.89 104.75 156.74 120.6 156.74 140.15C156.74 159.69 140.89 175.54 121.35 175.54Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Site footer
 */
export const Footer = () => {
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;
  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0 bg-pink-200">
      <div>
        <div className="fixed flex justify-between items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none">
          <div className="flex flex-col md:flex-row gap-2 pointer-events-auto">
            {nativeCurrencyPrice > 0 && (
              <div>
                <div className="btn btn-primary btn-sm font-normal gap-1 cursor-auto">
                  <CurrencyDollarIcon className="h-4 w-4" />
                  <span>{nativeCurrencyPrice.toFixed(2)}</span>
                </div>
              </div>
            )}
            {isLocalNetwork && (
              <>
                <Faucet />
                <Link href="/blockexplorer" passHref className="btn btn-primary btn-sm font-normal gap-1">
                  <MagnifyingGlassIcon className="h-4 w-4" />
                  <span>Block Explorer</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <div className="text-center">
              <a href="https://github.com/scaffold-eth/scaffold-eth-2" target="_blank" rel="noreferrer" className="text-taiko-pink hover:text-pink-700">
                Fork me
              </a>
            </div>
            <span className="text-taiko-pink">·</span>
            <div className="flex justify-center items-center gap-2">
              <p className="m-0 text-center text-taiko-pink">
                Built with <HeartIcon className="inline-block h-4 w-4 text-taiko-pink" /> at
              </p>
              <a
                className="flex justify-center items-center gap-1"
                href="https://buidlguidl.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BuidlGuidlLogo className="w-3 h-5 pb-1" />
                <span className="text-taiko-pink hover:text-pink-700">BuidlGuidl</span>
              </a>
              <p className="text-taiko-pink">and</p>
              <a
                className="flex justify-center items-center gap-1"
                href="https://taiko.xyz/"
                target="_blank"
                rel="noreferrer"
              >
                <TaikoLogo className="w-3 h-5 pb-1 text-taiko-pink" />
                <span className="text-taiko-pink hover:text-pink-700">Taiko</span>
              </a>
            </div>
            <span className="text-taiko-pink">·</span>
            <div className="text-center">
              <a href="https://discord.gg/taikoxyz" target="_blank" rel="noreferrer" className="text-taiko-pink hover:text-pink-700">
                Support
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};