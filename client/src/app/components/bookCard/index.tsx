import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Button from "../button";
import { Margin } from "../margin";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import { BREAKPOINTS } from "../responsive";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-2
        pb-2
        pr-2
        pl-2
    `}
`;

const ItemContainer = styled.div`
  ${tw`flex relative`}
`;

const Icon = styled.span`
  ${tw`
        text-red-500
        fill-current
        text-xs
        mr-1

        md:text-base
        md:mr-3
    `}
`;

const SmallIcon = styled.span`
  ${tw`
        text-gray-700
        fill-current
        text-xs
        ml-1

        md:text-base
        
    `}
`;

const Name = styled.span`
  ${tw`
        text-gray-600
        text-xs
        cursor-pointer
        select-none

        md:text-sm
    `}
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
        bg-gray-300
        mr-2
        ml-2

        md:mr-5
        md:ml-5
    `}
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  top: 2em;
  left: 0;
  user-select: none;

  ${({offset}: any) => offset && css`
    left: -7.07em;
  `}

  @media (min-width: ${BREAKPOINTS.md}) {
      top: 3.5em;
      left: -2em;
  }
` as any;

const BookCard = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);

  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Cloning Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar value={returnDate} onChange={setReturnDate as any} offset />
        )}
      </ItemContainer>
      <Margin direction="horizontal" value="2em" />
      <Button text="Clone The Repo" />
    </CardContainer>
  );
};

export default BookCard;
