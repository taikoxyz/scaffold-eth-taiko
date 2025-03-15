import { defineChain } from "viem";

// TODO: Add Chain details here.
export const taikoTestnet = defineChain({
    id: 10143,
    name: "Taiko Testnet",
    nativeCurrency: { name: "Taiko", symbol: "ETH", decimals: 18 },
    rpcUrls: {
        default: {
            // TODO: Add Taiko RPC URL
            http: ["<Taiko>"],
        },
    },
    blockExplorers: {
        default: {
            name: "Taiko Testnet Hekla",
            // TODO: Add Explorer URL
            url: "https://hekla.taikoscan.io/",
        },
    },
});