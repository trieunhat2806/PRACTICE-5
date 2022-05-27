import React from "react";

type ParentProps={
    children:React.ReactNode;
}

const Parent =(props: ParentProps)=>{
    return(
        <h2>{props.children}</h2>
    );
}

export default Parent;