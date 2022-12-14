import React, { useEffect, useRef, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link, useLocation } from "react-router-dom";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CurrencyToggle from "./CurrencyToggle";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import styled from "styled-components";
import { RouteName } from "../constant/routeNames";

interface TopNavProps {
  showCurrencyToggle?: boolean;
}

const ROUTES = [
  { url: RouteName.drop, name: "MERCH STORE" },
  { url: RouteName.home, name: "SURFER STORE" },
  // { url: RouteName.sell, name: "SELL" },
  // { url: RouteName.auctionsView, name: "Auctions" },
];

const OTHER_LAYOUT_ROUTES = [
  { url: RouteName.customToken, name: "Marketplace" },
  { url: RouteName.multipleCollection, name: "Multi Collection Marketplace" },
  { url: RouteName.marketplaceWithUrl, name: "Marketplace With URL" },
  {
    url: RouteName.multipleCurrencyMarketplace,
    name: "Multi Currency Marketplace",
  },
  { url: RouteName.multipleCurrencySell, name: "Multi Currency Sell" },
  { url: RouteName.activityView, name: "Marketplace Activity" },
];

const TopNav: React.FC<TopNavProps> = ({ showCurrencyToggle = false }) => {
  const wallet = useAnchorWallet();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLLIElement>(null);

  const { pathname } = useLocation();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current?.contains(event.target)) return;
    setOpen(false);
  };

  const handleListKeyDown = (event: any) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <HeaderBar>
        <Logo>
          <Link to={RouteName.home}>
            <img alt="Surfers Dao" src="/logo.png" />
          </Link>
        </Logo>
        <HeaderBarRight>
          {showCurrencyToggle && <CurrencyToggle />}
          <Wallet>
            {wallet ? (
              <ConnectButton />
            ) : (
              <ConnectButton>Connect Wallet</ConnectButton>
            )}
          </Wallet>
        </HeaderBarRight>
      </HeaderBar>
      <ContentBar>
        <img alt="Surfers Dao" src="/logo-surfersdao.png" />
        <Menu>
          {ROUTES.map((item) => (
            <li key={item.url} className={pathname === item.url ? "active" : ""}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </Menu>
        <Prompt>Please scroll to the bottom of the page for details regarding redemption of NFTs for physical merch</Prompt>
      </ContentBar>
    </>
  );
};

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ContentBar = styled.div`
  img {
    display: block;
    width: 80%;
    max-width: 400px;
    margin: 20px auto 50px;
  }
`;

const HeaderBarRight = styled.div`
  display: flex;
`;

const Wallet = styled.ul`
  flex: 0 0 auto;
  margin: 0;
  padding: 0;
`;

const ConnectButton = styled(WalletMultiButton)`
  padding: 6px 16px;
  border-radius: 12px !important;
  background-color: #4e44ce;
  margin: 0 auto;
`;

const Logo = styled.div`
  flex: 0 0 auto;
  margin-right: 10px;

  img {
    height: 60px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: inline-flex;
  flex: 1 0 auto;
  margin-bottom: 20px;

  > li {
    a {
      margin: 0 12px;
      border-radius: 10px;
      background-color: var(--button-default-color);
      display: inline-block;
      color: var(--main-text-color);
      padding: 6px 60px;
      list-style-image: none;
      list-style-position: outside;
      list-style-type: none;
      outline: none;
      text-decoration: none;
      text-size-adjust: 100%;
      touch-action: manipulation;
      transition: color 0.3s;

      @media only screen and (max-width: 600px) {
        padding: 6px 30px;
      }
    }

    &:hover > a,
    &:active > a,
    &.active > a {
      background-color: var(--button-active-color);
    }
  }
`;

const Prompt = styled.div`
  margin-bottom: 60px;
  font-size: 15px;
`;

export default TopNav;
