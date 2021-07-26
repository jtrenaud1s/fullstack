import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CarImg from "../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../assets/images/blob.svg";
import { BREAKPOINTS } from "../components/responsive";
import Button from "../components/button";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `}
`;

const LeftContainer = styled.div`
  ${tw`
        w-1/2
        flex
        flex-col
    `}
`;

const RightContainer = styled.div`
  ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `}
`;

const Slogan = styled.h1`
  ${tw`
        font-bold
        text-2xl
        text-black
        mb-4

        xl:text-6xl
        xl:leading-relaxed

        lg:font-black
        lg:leading-normal

        md:text-5xl
        md:font-extrabold

        sm:text-3xl
        sm:leading-snug
    `}
`;

const Description = styled.p`
  ${tw`
        text-xs
        overflow-hidden
        max-h-12
        text-gray-800

        lg:text-lg
        xl:text-lg
        sm:max-h-full
    `}
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${BREAKPOINTS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${BREAKPOINTS.xl}) {
    width: 70em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-20deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${BREAKPOINTS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }

  @media (min-width: ${BREAKPOINTS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
        flex
        flex-row
        mt-5
        flex-wrap
        items-center
    `}
`;

const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Use it to start some decent projects</Slogan>
        <Description>
          It includes frontend and backend Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Quae itaque debitis nulla! Facilis
          facere quia perferendis eaque, quos atque minus iusto necessitatibus
          natus veniam dolore rerum vero consectetur cumque aliquam?
        </Description>
        <ButtonsContainer>
          <Button text="Start Using It" />
          <Button theme="outlined" text="Why Should I?" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} />
        </BlobContainer>
        <StandaloneCar>
          <img src={CarImg} />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
};

export default TopSection;
