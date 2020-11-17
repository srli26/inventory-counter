import Table from '../components/Table';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Card from '../components/Card';
import Snackbar from '../components/Snackbar';

const CounterMain = styled.div`
    position: absolute;
    top: 15px;
    right: 0;
    left: 0;
    bottom: 0;
    font-size: 65px;
    @media screen and (max-width: 576px) {
        top: 6%;
        font-size: 15vw;
      }
      @media screen and (min-width: 1024px) {
        top: 7%;
        font-size: 80px;
      }
`;

const Form = styled.div`
    padding: auto;
    position: absolute;
    margin: 5%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;

const Home = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isCliked, setIsCliked] = useState(false);
    const [tableIsShown, setTableIsShown] = useState(false);
    const [productList, setProductList] = useState([]);

    
    const validateInput = () => {
        // Make Snackbar visible
        setIsCliked(true);
        // Validate user's input
        if (name === '') {
            setIsSuccess(false);
            setCount(0);
            setName('');
        } else {
            const productListWithNewItem = [
                ...productList,
                {
                    id: productList.length + 1,
                    name: name,
                    quantity: count,
                }
            ];
            setProductList(productListWithNewItem);
            setTableIsShown(true);
            setIsSuccess(true);
            setCount(0);
            setName('');
        }
    }

    // Snackbar disappears after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsCliked(false)
        }, 5000);
        return () => clearTimeout(timer);
    });

    return (
        <div className="container m-0">
            <div className="row">
                <div className="col-md-6 col-12">
                    <Card purpose="counter">
                        <CounterMain>
                            <Button purpose="increment" onClick={() => setCount(count + 1)}>
                                <span class="material-icons md-size">expand_less</span>
                            </Button>
                            <p>{count}</p>
                            {/* Control down arrow */}
                            {count > 0 &&
                                <Button purpose="increment" onClick={() => setCount(count - 1)}>
                                    <span class="material-icons md-size">expand_more</span>
                                </Button>
                            }
                        </CounterMain>
                    </Card>
                    <Card>
                        <Form className="form-row">
                            <div className="form-group col-9">
                                <input className="form-control" type="text" value={name} placeholder="Name" onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="form-group col-3">
                                <Button onClick={validateInput}>SAVE</Button>
                            </div>
                        </Form>
                    </Card>
                </div>
                <div className="col-md-6 col-12">
                    {tableIsShown ? (
                        <Table productList={productList} />) : (
                            <Card><br />No data available.</Card>)}
                </div>
            </div>
            {isCliked && <Snackbar isSuccess={isSuccess} />}
        </div>
    );
}

export default Home;