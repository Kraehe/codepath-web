import React from "react"



const Cards = (props) => {
    return (
        <div className='Card'>
            <img
                style={{ width: "10em", display: "block", margin: "0 auto 5px" }}
                src={props.src}
                alt={props.alt}
            />
            <div className='cardDesc'>
                <h3>{props.title}</h3>
                <hr></hr>
                <p>{props.date}</p>
                <a href={props.link}><button className='Button'>Learn More</button>
                </a>
            </div>
            </div>
    )
}

export default Cards;