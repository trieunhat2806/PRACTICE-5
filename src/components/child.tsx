import React from "react";

type ChildProps={
        names:{
            name: string;
            style: React.CSSProperties;
    }[]
}

const Child=(props:ChildProps)=>{
    return(
            <div>
                {props.names.map(item=>(<button style={item.style}>{item.name}</button>
                )
                )}
            </div>
    );
}

export default Child;