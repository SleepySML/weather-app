import React from 'react';

class Search extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.match.params.search}</h1>
            </div>
        );
    }
}

export default Search;
