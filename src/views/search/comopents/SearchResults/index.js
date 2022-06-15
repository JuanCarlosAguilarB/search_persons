import SearchResultsItems from "./"
export default function SearchResults({results,isSearching}){ 
//     console.log("valor:",results.id);
//     return (

//         <div>
//             hola: {results.id}

// {results?.map((value)=>{

// return (
     
//     <div key={value.id}>

//         <p>{value.name}</p>
//         <p>{value.emai}</p>
//     </div>
// );

// })}        </div>
//     );
// }
console.log("hola:",results);
return (
    <div style={{ 
        width: "100%",
        padding: "0rem 2rem 0rem 2rem",
    }}>
      {!results.length && isSearching && <p>No existen resultados</p>}
      {results?.map((value) => 
        <SearchResultsItems key={value.id} {...value} />)}
    </div>
  );
}


// 

// export default function SearchResults({ results, isSearching }) {
