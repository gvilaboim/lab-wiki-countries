import React from 'react'
import { Link } from "react-router-dom";

const CountriesList = ({countries}) => {
    console.log(countries)
    return (
     
                <div className="col-5" >
                    <div className="list-group">
                        {
                            countries.map(element => {
                            return <Link className={"list-group-item list-group-item-action"} to= {element.alpha3Code} key={element.alpha3Code}>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`} width={20}/> {element.name.official}  </Link>
                            })
                        }
       
                    </div>
                </div>


    )
}

export default CountriesList