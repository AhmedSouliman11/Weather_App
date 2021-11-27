import React from 'react';
const Form = (props) => {
    return(
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="country..." />
            <button type="submit">Get Weather</button> 
        </form>
    );
}
export default Form ;