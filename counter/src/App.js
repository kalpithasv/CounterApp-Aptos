import React, { useState, useRef } from 'react';
import LeaderBoard from './components/LeaderBoard';
import NavBar from './components/NavBar';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  useWallet,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, goerli, mainnet, optimism, polygon, base, zora } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora, goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function App() {
  const [isLeaderBoardOpen, setIsLeaderBoardOpen] = useState(false);
  const [count, setCount] = useState(0);
  const wallet = useWallet();

  const leaderBoardRef = useRef(null);

  const toggleLeaderBoard = () => {
    setIsLeaderBoardOpen(!isLeaderBoardOpen);
  };

  const connectToPetraWallet = () => {
    wallet.connect().then((response) => {
      console.log(response); // { address: string, address: string }
      return wallet.account();
    }).then((account) => {
      console.log(account); // { address: string, address: string }
    }).catch((error) => {
      // Handle errors
    });
  };

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className="h-screen w-screen relative overflow-hidden bg-orange-300">
          <NavBar toggleLeaderBoard={toggleLeaderBoard} />
          <div
            ref={leaderBoardRef}
            className={`absolute top-0 left-0 ease-in-out  ${
              isLeaderBoardOpen
                ? 'animate-fade-in translate-x-0'
                : 'animate-fade-out translate-x-[-100%]'
            }`}
          >
            <LeaderBoard toggleLeaderBoard={toggleLeaderBoard} />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[200px] font-dots leading-[1] text-center py-10">
              {count}
            </h1>
            <button
              className="w-[10rem] hover:scale-105 shadow-sm active:scale-100 transition-all duration-100 rounded-md p-2 bg-orange-500 text-white text-2xl font-bold"
              onClick={() => setCount(count + 1)}
            >
              Click Me
            </button>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={connectToPetraWallet}
            >
              Connect to Petra Wallet
            </button>
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
