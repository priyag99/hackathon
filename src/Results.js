import React from 'react';

const ResultList = ({resultList=[]}) => {
    return (
        <>
        {
            resultList.map((dat,index) => {
                if (data) {
                    return (
                        <div key={data.name}>
                            <h1> {data.name} </h1>
                        </div>
                    )
                }
                return null
            } ) }
        </>
    );
}

export default ResultList