import React from "react";
import New from "./New";
import Popular from "./Popular";

function wrapperComponent(Component){
    return (props)=>{
        if(props.views<100){
            return <New><Component {...props}/></New>
        }
        if(props.views>=1000){
            return <Popular><Component {...props}/></Popular>
        }
    }
}
export default wrapperComponent;
