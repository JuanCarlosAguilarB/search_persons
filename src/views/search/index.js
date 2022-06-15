

import { useState } from "react";
import SearchBox from "./comopents/SearchBox";

import "./style.css";

import data from "../../data/users.json";
import SearchResults from "./comopents/SearchResults";
export default function  Search(){

    const [isAtTop,setIsAtTop]=useState(false);
    const [userData,setUserData]=useState(data)
    const [results,setResults]=useState([]);

    const handleSearchClick=(searchText)=>{
        setIsAtTop(true);
        if(userData?.length){            
        // setIsAtTop(!isAtTop);
        searchText=searchText.toLocaleLowerCase()
        const filterData=userData.filter((value)=>{
                    (value.name.toLocaleLowerCase().includes(searchText) ||
                    value.email.toLocaleLowerCase().includes(searchText)||
                    value.username.toLocaleLowerCase().includes(searchText)||
                    value.phone.toLocaleLowerCase().includes(searchText));
        });
        setResults(filterData);
        console.log("valor1: ",filterData);
        console.log("talvez: ",results);

        
        }
    };
    const HandleClose= ()=>{
        setIsAtTop(!isAtTop);
        setResults([]);
    };
    console.log(results.id)
    console.log("lo",results.length);
    

    return(
<div className={`search ${isAtTop ? "search--top" : "search--center"}`}>

<SearchBox onSearch={handleSearchClick} onClose={HandleClose} isSearching={isAtTop}/>
<SearchResults results={results} isSearching={isAtTop}/>
</div>

    );
}

