import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Homescreen = () => {

    const [data, setData] = useState([]) //setrooms and rooms= data walata
    const [loading, setloading] = useState()

    const [error, seterror] = useState()

    useEffect(() => {
        const fetchData = async () => {

            try {
                setloading(loading)
                const { data: response } = await axios.get('/api/rooms/getallrooms');
                setData(response);
                setloading(false)
            } catch (error) {
                seterror(true)
                console.error(error.message);
                setloading(false)
            }

        }

        fetchData();
    }, []);

    // useEffect(() => {
    //     async function fetchData() {
    //       try {
    //         const data = (await axios.get('/api/rooms/getallrooms')).data;
    //         console.log(data);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     }

    //     fetchData();
    //   }, []);

    return (
        <div>
            <div className="row bs">
                {loading ? (<h1>loading...</h1>) : error ? (<h1>Error..</h1>) : (data.map(room => {

                    return <div className="col-md-9">
                        <Room room={room} />
                    </div>;
                }))}

            </div>
        </div>
    )
}

export default Homescreen;