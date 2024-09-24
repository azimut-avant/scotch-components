import React from "react";
import "./style.scss"
import {ImageGalleryCardProps} from "ImageGallery.types";

export const ImageGalleryCard = (props: ImageGalleryCardProps) => {
    let grid = "auto 50px"
    if(props.gridRows){
        grid = props.gridRows
    }
    else if(props.bar){
        grid = "auto 50px 30px"
    }

    return <div
        className={"scotch-image-gallery-card"}
        style={{gridTemplateRows: grid}}
    >
        <div className={"scotch-image-gallery-card-data"}>
            <div className={"scotch-image-gallery-card-img"}>
                <img src={props.src} alt={"no image"} onClick={props.onClick} />
            </div>
        </div>
        {
            props.caption
                ? <div className={"scotch-image-gallery-card-caption"}>
                    {props.caption}
                </div>
                : null
        }
        {
            props.bar
                ? <div className={'scotch-gallery-info-bar'}>
                    {props.bar}
                </div>
                : null
        }
    </div>
}