import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function ConnectWalletButton() {
  const { address, isConnected } = useAccount();
  console.log(address);
  return (
    <div>
      <ConnectButton />
      {isConnected && <p></p>}
    </div>
  );
}
