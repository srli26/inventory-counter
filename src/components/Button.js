import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    color: ${(props) => {
        if (props.purpose === 'increment') {
            return '#000';
        } else {
            return '#fff';
        }
    }};
    background: ${(props) => {
        if (props.purpose === 'increment') {
            return 'transparent';
        } else {
            return '#0275d8';
        }
    }};
    border-radius: 4px;
    border: 0;
    padding: 4px 8px;
`;

Button.defaultProps = {
    purpose: 'other purpose',
};

Button.propTypes = {
    purpose: PropTypes.string,
};

export default Button;