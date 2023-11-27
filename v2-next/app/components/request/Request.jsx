import React from "react";
import Link from "next/link";

export default function Request(props) {  
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
