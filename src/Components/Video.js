import React from "react";
import wrapperComponent from "./wrapperComponent";

function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} allow="autoplay; encrypted-media"/>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
}

export default wrapperComponent(Video);