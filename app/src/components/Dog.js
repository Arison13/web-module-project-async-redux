import React, {useEffect} from "react";
import axios from 'axios';
import { connect } from 'react-redux';

import { fetchStart, fetchSuccess, fetchError } from "../actions";

const Dog = ({picture, dispatch, isFetching, error}) => { 

    // isFetching = false ;

    // useEffect( () => {
    //     dispatch(fetchStart())

    // }, [])
    if (error) {
        return (<h2>Opps, Something Went Wrong: {error}</h2>)
    }
    if (isFetching) {
        return(<h2>Hold Up <br/>Getting a New Doggie for you!</h2>)
    }

const handleClick = () => {
    dispatch(fetchStart())

    axios.get("https://dog.ceo/api/breeds/image/random")
        .then((resp) => {
            console.log(resp.data)
            dispatch(fetchSuccess(resp.data.message))
        })
        .catch((err) => {
            console.log(err)
            dispatch(fetchError(err))
        })
    }
      
return (
    <div>
        <h1>Random Doggie Pic</h1>
        <img src={picture} alt={picture}/>
        <button onClick={handleClick}>Get New Dog!</button>
    </div>
    )
}


const mapStateToProps = state => {
    return ({
      picture: state.picture,
      isFetching: state.isFetching,
      error: state.error
    })
  }

export default connect(mapStateToProps) (Dog);