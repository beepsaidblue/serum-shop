import { Drops } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";

const Drop: React.FC = () => {
  const wallet = useAnchorWallet();

  return (
    <DesContainer>
      <h1 style={{ marginTop: 40, marginBottom: 15, fontSize: 48, color: '#0888fe' }}>Redeem Merch</h1>
      <p style={{ marginBottom: 40 }}>Redeem your favorite merch with SSDAO</p>
      <Drops
        candyShop={candyShop}
        wallet={wallet}
        walletConnectComponent={<WalletMultiButton />}
        filter
        search
      />
    </DesContainer>
  );
};

export default Drop;
const DesContainer = styled.div`
  width: 100%;

  p > a {
    color: #fff;
    text-decoration: underline;
  }
`;
