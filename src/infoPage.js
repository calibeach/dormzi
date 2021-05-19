import React from "react";

function InfoPage ({ match, 
    location, 
    }) {
    const {
    params: { pokemonID },
    } = match;
return (
<div className = "postPage">
<h1>Title</h1>
</div>
)

}
export default InfoPage