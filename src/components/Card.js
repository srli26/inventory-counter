import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
text-align: center;
background: #fff;
position: relative;
width: 350px;
height: ${(props) => {
        if (props.purpose === 'counter') {
            return '350px';
        } else {
            return '75px';
        }
    }};
@media screen and (max-width: 576px) {
    width: 85vw;
    height: ${(props) => {
        if (props.purpose === 'counter') {
            return '85vw';
        } else {
            return '16vw';
        }
    }};
}
@media screen and (min-width: 1024px) {
    width: 450px;
    height: ${(props) => {
        if (props.purpose === 'counter') {
            return '450px';
        } else {
            return '85px';
        }
    }};
}
margin-bottom: 3%;
`;

Card.defaultProps = {
    purpose: 'other purpose',
};

Card.propTypes = {
    purpose: PropTypes.string,
};

export default Card;