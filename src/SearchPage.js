import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ResultList from './ResultList';


const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [resultListDefault, setResultListDefault] = useState();
    const [resultList, setResultList] = useState();

    const fetchData = async () => {
        return await fetch('ENTER API URL HERE')
        .then(response => response.json())
        .then(data => {
            setResultList(data)
            setResultListDefault(data)
        });}

    const updateInput = async (input) => {
        const filtered = resultListDefault.filter(result => {
            return result
        })
        setInput(input);
        setResultList(filtered);
    }

    useEffect( () => {fetchData()},[]);

    return (
        <>
            <h1> Search Results</h1>
            <SearchBar
            input={input}
            onChange={updateInput}
            />
            <ResultList resultList={resultList}/>
            </>
    );

}

export default SearchPage