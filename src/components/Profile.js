import React, { useEffect, useState } from 'react';
import './profile.css';

export default function Profile() {
    const authId = localStorage.getItem('userid');
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            let result = await fetch(`/profile/${authId}`);
            if (!result.ok) {
                throw new Error(`Fetch error: ${result.status}`);
            }
            result = await result.json();
            setData(result);
           console.log(result);
            setLoading(false); // Data has been loaded
        } catch (error) {
            setError(error.message);
            setLoading(false); // Data loading failed
        }
    };
  
    return (
        <div style={{ marginTop: "90px" }}>
           
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : 
            (
                    <div className="ccard" >
                        <div className="ccard-image">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                        </div>
                        <div className="coontainer">
                            <h4><b><i>Hi! </i></b></h4>
                            <h4><b><i>{data.fname}</i></b></h4>
                            <p>Your Email is : {data.email}</p>
                        </div>
                    </div>
               
            )}
        </div>
    );
}
