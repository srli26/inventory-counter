import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableContainer = styled.table`
    background: #fff;
    width: 350px;
    @media screen and (max-width: 576px) {
        width: 100%;
    }
    @media screen and (min-width: 992px) {
        width: 45vw;
        margin-left: -10vw;
    }
    @media screen and (min-width: 1024px) {
        margin-left: 0;
    }
    @media screen and (min-width: 1200px) {
        width: 50vw;
        margin-left: -6vw;
    }
`;

const Table = (props) => {
    const { productList } = props;

    return (
        <TableContainer className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                </tr>
            </thead>
            <tbody>
                {productList.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </TableContainer>
    );
}

Table.defaultProps = {
    productList: [],
};

Table.propTypes = {
    productList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            quantity: PropTypes.number,
        })),
};

export default Table;