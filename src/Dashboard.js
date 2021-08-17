import React from "react";

const Dashboard = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <div>
            <h1>WELCOME TO DASHBOARD</h1>

            <a
                href="javascript:void(0);"
                onClick={handleLogout}
                className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                <i className="ti-power-off mR-10"/>
                <span style={{color: "white"}}>Logout</span>
            </a>
        </div>
    );
}

export default Dashboard;