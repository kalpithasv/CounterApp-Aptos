import React, { useState, useRef, useEffect } from 'react';
import LeaderBoard from './components/LeaderBoard';
import NavBar from './components/NavBar';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  // useWallet,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  arbitrum,
  goerli,
  mainnet,
  optimism,
  polygon,
  base,
  zora,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// Function to store data in local storage
const storeData = (key, value) => {
  try {
    // Convert the value to a JSON string before storing
    const serializedValue = JSON.stringify(value);
    // Store the key-value pair in local storage
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

// Function to retrieve data from local storage
const getData = (key) => {
  try {
    // Retrieve the serialized value from local storage
    const serializedValue = localStorage.getItem(key);
    // Parse the JSON string to get the original value
    const value = JSON.parse(serializedValue);
    return value;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};

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
  // Define storage key here
  const storageKey = 'userData';

  const [isLeaderBoardOpen, setIsLeaderBoardOpen] = useState(false);
  const [count, setCount] = useState(() => {
    const retrievedCount = getData(storageKey);
    return retrievedCount !== null ? retrievedCount : 0;
  });

  const leaderBoardRef = useRef(null);
  const [connectedWallet, setConnectedWallet] = useState(null);
  useEffect(() => {
    const retrievedCount = getData(storageKey);
    if (retrievedCount !== null) {
      setCount(retrievedCount);
    }
  }, []);

  useEffect(() => {
    storeData(storageKey, count);
  }, [count]);

  const toggleLeaderBoard = () => {
    setIsLeaderBoardOpen(!isLeaderBoardOpen);
  };

  const connectPetraWallet = async () => {
    try {
      const wallet = getAptosWallet();
      const response = await wallet.connect();
      console.log(response); // { address: string, address: string }

      const account = await wallet.account();
      console.log(account); // { address: string, address: string }
      setConnectedWallet(account);
    } catch (error) {
      console.error('Error connecting to Petra Wallet:', error);
    }
  };

  const getAptosWallet = () => {
    if ('aptos' in window) {
      return window.aptos;
    } else {
      console.warn('Petra Wallet not found. Opening Petra website for installation.');
      window.open('https://petra.app/', '_blank');
      return null; // Return null or handle the absence of Petra in your application logic
    }
  };

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className="h-screen w-screen relative overflow-hidden bg-orange-300">
          <NavBar
            toggleLeaderBoard={toggleLeaderBoard}
            connectPetraWallet={connectPetraWallet}
          />
          <div
            ref={leaderBoardRef}
            className={`absolute top-0 left-0 ease-in-out  ${
              isLeaderBoardOpen
                ? 'animate-fade-in translate-x-0'
                : 'animate-fade-out translate-x-[-100%]'
            }`}
          >
            <LeaderBoard toggleLeaderBoard={toggleLeaderBoard} num={count} />
          </div>
          <div className="flex flex-col items-center">

            <h1 className="text-[200px] font-dots leading-[1] text-center py-10">
              {count}
            </h1>

            <button
              className="w-[10rem] hover:scale-105 shadow-sm active:scale-100 transition-all duration-100 rounded-md p-2 bg-orange-500 text-white text-2xl font-bold"
              onClick={() => setCount((prevCount) => prevCount + 1)}
            >
              Click Me
            </button>
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
