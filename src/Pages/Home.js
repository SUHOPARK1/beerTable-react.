import React from 'react'
import {Link} from "react-router-dom";
import {Button} from "antd";


const Home = () => {
    return (<center>
            <div>
                <br/>
                    <h2>영갑 Junior Frontend Engineer</h2>
                    <h2>지원자 박수호</h2>
                <br/>
                <Button>
                    <Link to="/BeerList">BeerList 바로가기</Link>
                </Button>
            </div>
        </center>
    );
};

export default Home
