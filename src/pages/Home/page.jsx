"use client";

// import { Container } from "..//components/container";

import { Container } from "../../components/container";
// import { NavBar } from "@/app/components/navBar/navBar";
import React from "react";
import { BodyContainer, HomeContainer } from "./styles";
import { Banner } from "../../components/Banner/banner.component";
import { ProductCardContainer } from "../../components/ProductContainer/productContainer.component";

import { Footer } from "../../components/Footer/footer.component";
import { NavBar } from "../../components/navBar/navBar";
// import SignIn from "../Account/SignUp/page";
// import Link from "next/link";

export const LandingPage = () => {
  return (
    <HomeContainer alignItems="flex-start" background="#ffffff">
      <NavBar />

      <BodyContainer>
        <Banner />

        <ProductCardContainer />
      </BodyContainer>

      <Footer />
    </HomeContainer>
  );
};
