import React from 'react'
import {Meta} from "@storybook/react";
import {ImageGallery} from "./ImageGallery"
import {ImageGalleryCardProps} from "./ImageGallery.types"

const meta: Meta<typeof ImageGallery> = {
    component: ImageGallery
}

export default meta

export const ImageGalleryStory = () => {

    let items: Array<ImageGalleryCardProps> = [
        {
            name: 'Test',
            src: "https://upload.wikimedia.org/wikipedia/commons/6/61/Humpback_Whale_underwater_shot.jpg",
            caption: "Test",
            bar: <div>BAR HERE</div>
        },
        {
            name: 'Test',
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Siberischer_tiger_de_edit02.jpg/800px-Siberischer_tiger_de_edit02.jpg",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            bar: <div>TEST</div>
        }
    ]

    return <ImageGallery items={items} />
}
