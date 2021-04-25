import React from 'react'
import { NavLink } from "react-router-dom";

function Card({title,img,desc,link}) {
    return (
        <>
            <div className="card" style={{width: "18rem",margin:"20px",display:"inline-block",boxShadow:"0px 0px 12px 1px #c7c9c8"}}>
                <img src={img} className="card-img-top" alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <NavLink to="/service"><button className="btn btn-outline-danger"><i className="bi bi-book" style={{marginRight:"10px"}}></i>Read</button></NavLink>
                        <a href="https://api.whatsapp.com/send?text=https://gouravojha.github.io/opennews.github.io/"><i class="bi bi-share-fill" style={{marginLeft:"80px"}}></i></a>
                    </div>
            </div>
        </>
    )
}

export default Card
