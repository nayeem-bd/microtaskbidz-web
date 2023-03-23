import React from "react";

const Profile = (props) => {
    const { getData } = props;
    let data = {};
    try {
        data = { ...getData() };
    } catch (e) {}

    return (
        <React.Fragment>
            <h3>Name: {data.name}</h3>
            <h3>Email: {data.email}</h3>
        </React.Fragment>
    );
};

export default Profile;
