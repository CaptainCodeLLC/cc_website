import React from 'react';
import ReactDOM from 'react-dom'

function Triangle({vertices,color}){
    const pathData = [
        'M', vertices[0],[0], vertice[0][1],
        'L', vertices[1],[0], vertice[1][1],
        'L', vertices [2][0], vertices[2][1],
        'Z',
    ].join(' ')

    return(
        <path d= {pathData} fill = {color}/> 
    );
};

const vertices = [
    [0,60],
    [30,0],
    [60,60],
];

ReactDOM.render(
    <svg width = "60" height="60">
    Triangle
)