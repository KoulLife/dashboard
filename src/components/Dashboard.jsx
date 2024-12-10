import React from 'react';
import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <p>Dashboard</p>
            <Link to="/products">Go To Products</Link>
        </div>
    );
};

export default Dashboard;