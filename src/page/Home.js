import React from 'react'
// import Header from "../myComp/Header";
import Card from "../myComp/Card";
// import Category from "../myComp/Category";
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([])

  const getData = () => {
    fetch("https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&country=IN&topic=news&page=1&media=True", {
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
      {/* <Category /> */}
      <div className="mt-3 mx-5">
        <h1>Top Updates</h1>
      </div>
      {
        users.map((data) => {
          return (
            <Card
              link={data.link}
              img={data.media}
              desc={data.title}
            />
          )
        })
      }
        </>
    )
}
