import Head from "next/head";
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import { dataBgImg, holdSection, imgToSVG } from "../utilits";
import Footer from "./Footer";
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import PreLoader from "./PreLoader";
import ScrollTop from "./ScrollTop";
import Searchbox from "./Searchbox";
import SearchButton from "./SearchButton";
import Social from "./Social";
import WalletPopUp from "./WalletPopUp";
const Layout = ({ children, pageTitle }) => {
  useEffect(() => {
    holdSection();
    imgToSVG();
    dataBgImg();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>JK GAMING HUB | {pageTitle}</title>
      </Head>
      <ImageView />
      <VideoPopup />
      <PreLoader />
      {/* !Preloader */}
      {/* Left Navigation */}
      <Navigation />
      {/* !Left Navigation */}
      {/* Searchbox Popup */}
      <Searchbox />
      {/* !Searchbox Popup */}
      {/* Wallet Popup */}
      <WalletPopUp />
      {/* !Wallet Popup */}
      {/* Main */}
      <div className="metaportal_fn_main">
        {/* Mobile Navigation */}
        <MobileNavigation />
        {/* !Mobile Navigation */}
        {/* Header */}
        <Header />
        {/* !Header */}
        {/* Content */}
        <div className="metaportal_fn_content">
          {children}
          {/* Footer */}
          <Footer />
          {/* !Footer */}
        </div>
        {/* !Content */}
        {/* Social */}
        <Social />
        {/* !Social */}
        {/* Totop */}
        <ScrollTop />
        {/* /Totop */}
        {/* Search Button */}
        <SearchButton />
        {/* !Search Button */}
      </div>
    </Fragment>
  );
};
export default Layout;
