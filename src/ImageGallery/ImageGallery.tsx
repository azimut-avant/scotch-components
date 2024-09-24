import React, {useState} from "react";
import {ImageGalleryProps} from "./ImageGallery.types";
import {ImageGalleryCard} from "./ImageGalleryCard";
import {ImageGalleryModal} from "./ImageGalleryModal"
import "./style.scss"

export const ImageGallery = (props: ImageGalleryProps) => {
    const [galleryVisible, setGalleryVisible] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = (i: number) => {
        setSelectedIndex(i)
        setGalleryVisible(true)
    }

    const hasBar = React.useMemo(() => {
        return props.items.some(x => !!x.bar)
    }, [props.items])

    return <div>
        <ImageGalleryModal
            items={props.items}
            open={galleryVisible}
            onIndexChange={setSelectedIndex}
            onClose={() => setGalleryVisible(false)}
            currentIndex={selectedIndex}
        />

        <div className={"scotch-image-gallery-list"}>
            {props.items.map((x,i) => <ImageGalleryCard
                name={x.name}
                src={x.src}
                bar={x.bar || (hasBar ? <div></div> : null)}
                onClick={() => onSelect(i)}
                caption={x.caption}
                key={`image-${i}`}
            />)}
        </div>
    </div>

}