import React from "react";
import styled from "styled-components"

export interface IMarginProps {
  value: number | string
  direction?: "horizontal" | "vertical"
}

const HorizontalMargin = styled.span<IMarginProps>`
  display: flex;
  min-width: ${({ value }) => 
    typeof value === "string" ? value : `${value}px`};
    
`

const VerticalMargin = styled.span<IMarginProps>`
  display: flex;
  min-height: ${({ value }) =>
    typeof value === "string" ? value : `${value}px`};
`

function Margin(props: IMarginProps) {
  const { direction } = props

  if (direction === "horizontal") return <HorizontalMargin {...props} />
  else {
    return <VerticalMargin {...props} />
  }
}

Margin.defaultProps = {
  direction: "horizontal",
}

export { Margin }