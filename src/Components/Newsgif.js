import React from "react";
import newsIcon from './newsIcon.gif';

export default class Newsgif extends React.Component{
    render(){
        return(
            <div>
                <img src={newsIcon} alt="animated news icon" />
            </div>
        )
    }
}