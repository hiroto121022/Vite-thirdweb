import './App.css';
import { createThirdwebClient } from "thirdweb";
import { ConnectButton, useWalletInfo } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { sepolia } from "thirdweb/chains";
import { getContract } from "thirdweb";
import { useReadContract } from "thirdweb/react";
import abi from '../abi.json';

function App() {
  const clientId = '7819c6cf0d50bfc7dddfea1c237983f1';
  const client = createThirdwebClient({ clientId });
  const chain = sepolia;
  const address = "0xAEa068b343de1278863ef7C02131473cB5378132";

  const wallets = [
    inAppWallet(),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
  ];

  // Get the contract
  const contract = getContract({
    client,
    chain: chain,
    address: address,
    abi: [abi],
  });

  const { data, isLoading } = useReadContract({
    contract,
    method: "value",
  });

  const { data: walletData, status: walletStatus } = useWalletInfo();

  return (
    <div>
      <ConnectButton client={client} wallets={wallets} />
      <p>シンボル：{walletStatus === "connected" && walletData ? walletData.address : "接続されていません"}</p>
    </div>
  );
}

export default App;