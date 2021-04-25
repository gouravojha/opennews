import React from 'react'
import { useState, useEffect } from "react";


function Summery() {
    const [users, setUsers] = useState([])

    const getData = () => {
        fetch("https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&country=IN&topic=news&page=5&media=True", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7c615dcca4msh1256e61cbc40572p1f9723jsn712b498418d0",
                "x-rapidapi-host": "covid-19-news.p.rapidapi.com"
            }
        })
            .then(response => {
                return (response.json());
            }).then(data => {
                setUsers(data.articles)
                console.log(data["articles"])
            })
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(() => {
        getData()
    }, []);
    return (
        <>
            {
                users.map((data) => {
                    return (
                        <div className="card" style={{ width: "18rem",margin:"20px",display:"inline-block"}}>
                            <img src={data.media} className="card-img-top" alt={data.title} />
                            <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.summary}</p>
                            </div>
                        </div>

                    )

                })
            }
        </>
    )
}

export default Summery
