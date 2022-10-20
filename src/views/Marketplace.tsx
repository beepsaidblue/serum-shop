import { Orders, Stat } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";

const Marketplace: React.FC = () => {
  const wallet = useAnchorWallet();

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={"Serum Surfers Shop"}
        description={
          "Surf's up! Shop for unique surfer NFTs with SSDAO and USDC..."
        }
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
        search
      />
    </DesContainer>
  );
};

export default Marketplace;
const DesContainer = styled.div`
  width: 100%;
`;
