import React from "react";
import * as Styled from "./Styled";

export interface FlexProps {
    children?: React.ReactNode;
    onClick?: Function;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    alignSelf?: string;
    gap?: string;
    padding?: string;
    margin?: string;
    width?: string;
    maxWidth?: string;
    minWidth?: string;
    wrap?: string;
    flex?: string;
    height?: string;
    maxHeight?: string;
    minHeight?: string;
    border?: string;
    borderRadius?: string;
    backgroundColor?: string;
    boxShadow?: string;
    wordBreak?: string;
}

const Flex: React.FunctionComponent<FlexProps> = (props: FlexProps) => {
    const { children, onClick } = props;
    return (
        <Styled.StyledFlex onClick={onClick as any} {...props}>
            {children}
        </Styled.StyledFlex>
    );
};

export default Flex;