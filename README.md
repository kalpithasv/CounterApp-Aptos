# CounterApp

 Move-Based Blockchain Integration project! This repository contains the frontend and a sample backend for interacting with a Move-based blockchain.

## 💻Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## 🤩Introduction

  The CounterApp is a web application that features a central counter initially set to zero and a toggleable leaderboard component. Utilizing RainbowKit for Ethereum wallet interactions and Wagmi for configuration, the app employs local storage for persistent count value storage. Users can increment the count with a dedicated button. The Petra Wallet integration allows users to connect their wallets, with the connected wallet information, including the address and icon, dynamically displayed on the UI. This seamless integration enhances user engagement, providing a personalized experience within the CounterApp.

## 🪶Features

  The Leaderboard component in the CounterApp serves as a visual representation of the user engagement within the application. When users increment the count, their activity contributes to their position on the leaderboard. The leaderboard showcases the counts of various users, offering a competitive and interactive element to the app. Through RainbowKit and Wagmi integration, the app ensures a streamlined and secure connection to Ethereum wallets, allowing users to have a personalized and engaging experience while tracking and comparing their count achievements on the leaderboard.

## ✅Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Petra Wallet Chrome extension installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kalpithasv/CounterApp-Aptos
   cd move-blockchain-integration


# 📩Install dependencies:

bash

## Install frontend dependencies
    cd counter
    npm install

## Install backend dependencies
    cd ../move
    npm install
# ▶️Usage

## Start the backend server:

bash

    cd backend
    npm start

The server will run at http://localhost:3001.

## Start the frontend application:

bash

    cd frontend
    npm start

The frontend will be available at http://localhost:3000.

Open your web browser and navigate to http://localhost:3000. Connect to Petra Wallet and interact with the Move blockchain!



# 💱API Endpoints POST /transaction

 Description: Execute a transaction on the Move blockchain.

Request Body:

json

    {
    "key": "your-transaction-key"
    }

Response:

json

    {
    "success": true,
    "transactionResult": "Transaction executed successfully"
    }


# ⚒️What did I use

## WalletConnect Modal UI:
 Description: A project involving a WalletConnect Modal UI, which encountered an error related to the custom element registry.
Tech Stack: JavaScript, WalletConnect, Modal UI.

## CounterApp-Aptos:
Description: A React application with functionality like counting and connecting to Petra Wallet.
Tech Stack: React, RainbowKit, Wagmi, Petra Wallet integration.

## Move-Based Blockchain Integration:
Description: A project demonstrating the integration of a Move-based blockchain with a frontend application.

Tech Stack:
Frontend: React, RainbowKit, Wagmi, Petra Wallet integration.
Backend: Node.js.
Blockchain: Move-based blockchain.
Local Storage management.





# 📞 Contact 

If you have any questions or feedback about the CounterApp, please contact us - 

[Kalpitha S V](https://linktr.ee/kalpithasv)  



