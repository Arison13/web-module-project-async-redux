import React, {useEffect} from "react";
import { connect } from 'react-redux';

import { getDog } from "../actions";

const Dog = ({picture, dispatch, isFetching, error}) => { 

    useEffect( () => {
        dispatch(getDog());
    }, []);

    if (error) {
        return (<h2>Opps, Something Went Wrong: {error}</h2>)
    }
    if (isFetching) {
        return(<h2>Hold Up <br/>Getting a New Doggie for you!</h2>)
    }

const handleClick = () => {
    dispatch(getDog())
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