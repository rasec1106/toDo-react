import React, { Component } from "react";
import "./App.css"
import data from "./data.json"

class Teams extends Component{

    constructor(props){
        super(props);

        this.state={
            teams: data.teams,
            teamNames: data.teams.map((team)=>team.name.toLowerCase())
        };
    }

    render(){
        let i=0;
        console.log('object :>> ', this.state.teamNames);
        return(
            <div>
                {                    
                    this.state.teams.map((team)=>{
                        return(
                            <div key={i++} className="image__item">
                                <h1>{team.name}</h1>
                                <img src={team.imageUrl} alt=""/>
                                <br />                
                            </div>
                        )
                    })
                }
            </div>
        );
    }

}

export default Teams;