import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button as MaterialButton } from "@material-ui/core";

const colorsMap = {
    primary: "#4791DB",
    secondary: "#f50057",
    default: "#e0e0e0",
};

const StyledButton = styled( MaterialButton )`
    &.button {
        padding: 0;
        .children {
            color: #ffffff;
            background: ${ props => props.bg };;
            width: 100%;
            min-width: 190px;
            border-radius: 4px;
            padding: 17px 0;

            display: grid;
            justify-content: center;

            text-transform: none;
        }

        a {
            color: #ffffff;
            text-decoration: none;
        }
    }
`;

export function Button( props ) {
    const { color, children, onClick, variant, className } = props;

    return (
        <StyledButton
            className={ `button ${ className }`}
            variant={ variant }
            onClick={ onClick }
            bg={ colorsMap[ color ] || colorsMap.default }
        >
            <span className="children" >
                { children }
            </span>
        </StyledButton>
    );
}

Button.defaultProps = {
    children: "button",
    variant: "contained",
    className: "",
};

Button.propTypes = {
    color:  PropTypes.oneOf(
        Object.keys( colorsMap )
    ).isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.string,
}
