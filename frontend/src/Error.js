import React from 'react';


class Error extends React.Component{
    getInitialState() {
        return { value: 'Ma' }
    }

    render(){
        return(

            <div>

                <h1>Something went wrong!</h1>

            </div>
        )
    }

}

export default Error