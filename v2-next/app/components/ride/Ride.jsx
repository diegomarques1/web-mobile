import React from "react";
import Link from "next/link";

export default function Ride(props) {  
    if (props.type === "request") {
        return (
            <div className="available_ride">
                <div className="info_ride">
                    <p>{props.name} - {props.function}</p>
                    <p>Região: {props.region}</p>
                    <p>Campus: {props.campus}</p>
                </div>
                <Link 
                href={`/request-info?name=${props.name}&region=${props.region}&campus=${props.campus}`}>
                    {">"}
                </Link>
            </div>
        );
    }
    
    else if (props.type === "offer") {
        return (
            <div className="pending_offer">
                <div className="info_ride">
                    <p>{props.name} - {props.function}</p>
                    <p>Região: {props.region}</p>
                    <p>Campus: {props.campus}</p>
                </div>
                <Link 
                href={`/offer-info?name=${props.name}&region=${props.region}&campus=${props.campus}`}>
                    {">"}
                </Link>
            </div>
        );
    }
}
