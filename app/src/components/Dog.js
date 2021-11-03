import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';


const Dog = (props) => { 

const handleClick = () => {
    axios.get("https://dog.ceo/api/breeds/image/random ")
        .then( resp => {
            console.log(resp.data.message)
        })
        .catch(err => {
            console.log(err)
        })
      }

      

return (
    <div>
        <h1>HELLO WORLD</h1>
        <img src={props.picture} alt={props.picture}/>
        <button onClick={handleClick}>Get New Dog!</button>
    </div>
    )
}


const mapStateToProps = state => {
    return ({
      picture: state.picture
    })
  }

export default connect(mapStateToProps) (Dog);