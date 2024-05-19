import React from "react";
import { AppBar } from "../Header/Header";
import { RotatingLines } from "react-loader-spinner";
import { Suspense } from "react";

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        }
      >
        <main>{children}</main>
      </Suspense>
    </>
  );
};

export default Layout;
