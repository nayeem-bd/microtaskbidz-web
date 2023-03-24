import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
    const { getData } = props;
    let data = {};
    const navigate = useNavigate();
    try {
        data = { ...getData() };
    } catch (e) {}
    useEffect(() => {
        if (!data.email && !data.name) {
            return navigate("/");
        }
    });
    return (
        <React.Fragment>
            <h3>Name: {data.name}</h3>
            <h3>Email: {data.email}</h3>
        </React.Fragment>
    );
};

export default Profile;
