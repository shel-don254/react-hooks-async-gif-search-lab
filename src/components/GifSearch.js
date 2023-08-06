import { useState } from "react";

export default function GifSearch({ handleSubmit }) {
    const[item,setItem]=useState("")



function handleChange(e){
    e.preventDefault();
     setItem(e.target.value)   
}

function onsubmit(e){
    e.preventDefault();
    handleSubmit(item)

}

console.log(item)
  return (
    <div>
      <form onSubmit={(e)=>{onsubmit(e)}}>
        <div className="form-group">
          <label for="searchFor">Search</label>

          <input
            type="text"
            value={item}
            class="form-control"
            id="searchFor"
            onChange={(e)=>handleChange(e)}
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted">
            We are searching for ..
          </small>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}