import React, {ReactNode} from "react"

export interface ImageGalleryCardProps{
    src: string
    name: string,
    onClick?: () => void,
    gridRows?: string
    bar?: ReactNode
    caption?: ReactNode | string
}

export interface ImageGalleryModalProps{
    currentIndex: number
    onIndexChange: (x: number) => void
    items: Array<{src: string, name: string}>
    onClose: () => void
    open: boolean
}

export interface ImageGalleryProps{
    items: Array<ImageGalleryCardProps>
}