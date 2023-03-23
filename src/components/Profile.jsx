import React from "react";

const Profile = (props) => {
    const { getData } = props;
    const data = { ...getData() };

    return (
        <React.Fragment>
            <h3>Name: {data.name}</h3>
            <h3>Email: {data.email}</h3>
        </React.Fragment>
    );
};

export default Profile;
