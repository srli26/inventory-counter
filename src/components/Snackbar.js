import styled from 'styled-components';
import PropTypes from 'prop-types';

const SnackbarContatiner = styled.div`
    width: 350px;
    position: absolute;
    bottom: 0;
    right: 10px;
    @media screen and (max-width: 768px) {
        width: 100%;
        top: 0;
        right: 0;
        height: 60px;
        margin: 0;
    }
`;

const Snackbar = (props) => {
    const { isSuccess } = props;

    return (
        <div>
            <SnackbarContatiner className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`} role="alert">
                {isSuccess ? 'Successfully saved.' : 'Product name cannot be empty.'}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </SnackbarContatiner>
        </div>
    );
}

Snackbar.defaultProps = {
    isSuccess: false,
};

Snackbar.propTypes = {
    isSuccess: PropTypes.bool,
};

export default Snackbar;