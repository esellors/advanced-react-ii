import React from 'react';

class BigComponent extends React.Component {

    render() {
        let arr = [];
        for(let i = 0; i < 10000; i++) {
            arr.push(<h1>{i}</h1>);
        }
        return arr;
    }
}

export default BigComponent;