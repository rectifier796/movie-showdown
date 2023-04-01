import React from "react";

const Search=(props)=>{
    return(
        <div className="col col-sm-4">
            <input className="form-control"
            onChange={(event)=>props.setSearchValue(event.target.value)}
            placeholder="Type to search..." type="text" />
        </div>
    );
}
export default Search;