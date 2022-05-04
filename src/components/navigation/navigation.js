import React from "react";

const Navigation = ({ onRouteChange, state }) => {
    if (state === 'home') {
        return (
            <nav style={{ display: "flex", justifyContent: "flex-end" }}>
                <p
                    onClick={() => onRouteChange('signIn')}
                    className=' f3 link dim black underline pa3 pointer '>
                    sign out</p>
            </nav>
        )
    } else {
        return ("")
    }
};

export default Navigation;
