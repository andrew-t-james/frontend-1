// NPM
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Media from "react-media";

// COMPONENTS
import DropDownMenu from "./DropDownMenu";
import CurrencySelector from "../Currency/Selector";

// ACTIONS/CONFIG
import { sizes } from "../../libs/styled";
import { mainNav } from "../../data/nav";

// STYLES
const Wrap = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;

  ${props =>
    props.home &&
    css`
      & .Select--single > .Select-control .Select-value {
        color: white;
      }
    `};
`;

const Nav = styled.nav`
  ${props =>
    props.home &&
    css`
      a {
        color: white;
      }
    `};
`;

const NavLink = styled(Link)`
  display: inline-block;
  margin-right: 15px;
  padding: 5px;
  position: relative;
  transition: color 0.1s ease-in;

  &:last-child {
    margin-right: 0;
  }

  &:after {
    background: #4fb798;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    opacity: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: opacity 0.1s ease-in;
    width: 100%;
  }

  &.is-active,
  &:hover {
    color: #4fb798;

    &:after {
      opacity: 1;
      transition: opacity 0.2s ease-in;
    }
  }
`;

const ActionsWrap = styled.div`
  align-items: center;
  display: flex;
  padding-left: 15px;

  .Select-multi-value-wrapper {
    min-width: 37px;
  }

  > div:first-child {
    margin-right: 15px;
  }

  > div:nth-child(3) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

// MODULE
export default function TopBarDesktopNav({ home, language, currency, theme }) {
  return (
    <Media
      query={`(min-width: ${sizes.large})`}
      render={() => (
        <Wrap home={home}>
          <Nav home={home}>
            {mainNav.map(item => (
              <NavLink
                key={item.label}
                activeclassname="is-active"
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </Nav>
          <ActionsWrap>
            <CurrencySelector />
            <DropDownMenu theme={theme}/>
          </ActionsWrap>
        </Wrap>
      )}
    />
  );
}

// Props Validation
TopBarDesktopNav.propTypes = {
  home: PropTypes.bool.isRequired,
  language: PropTypes.string,
  theme: PropTypes.string,
  currency: PropTypes.string
};

TopBarDesktopNav.defaultProps = {
  language: "english",
  currency: "USD"
};