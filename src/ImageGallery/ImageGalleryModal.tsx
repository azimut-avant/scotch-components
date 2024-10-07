import React, {useEffect, useState} from "react";
import {ImageGalleryModalProps} from "./ImageGallery.types";
import {ArrowLeftIcon, ArrowRightIcon, XCircleIcon, XIcon, ZoomInIcon, ZoomOutIcon} from "lucide-react";
import "./style.scss"

export const ImageGalleryModal = (props: ImageGalleryModalProps) => {
    const [zoom, setZoom] = useState(1);
    const start = Math.max(props.currentIndex - 10, 0);
    const end = Math.min(props.currentIndex + 10 + 1, props.items.length);
    const thumbnailsToShow = props.items.slice(start, end);

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = (e) => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        e.preventDefault();
        if (isDragging) {
            setPosition((prevPos) => ({
                x: prevPos.x + e.movementX,
                y: prevPos.y + e.movementY,
            }));
        }
    };

    const nextImage = () => {
        if (props.currentIndex < props.items.length - 1) {
            setPosition({x:0, y:0})
            props.onIndexChange(props.currentIndex + 1);
        }
    };

    const prevImage = () => {
        if (props.currentIndex > 0) {
            setPosition({x:0, y:0})
            props.onIndexChange(props.currentIndex - 1);
        }
    };

    const zoomIn = () => {
        setZoom(zoom + 0.1);
    };

    const zoomOut = () => {
        if (zoom > 0.1) {
            setZoom(zoom - 0.1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setPosition({x: 0, y:0})
                props.onClose();
            } else if (event.key === 'ArrowRight') {
                const nextIndex = (props.currentIndex + 1) % props.items.length;
                setPosition({x: 0, y:0})
                props.onIndexChange(nextIndex);
            } else if (event.key === 'ArrowLeft') {
                const prevIndex = (props.currentIndex - 1 + props.items.length) % props.items.length;
                setPosition({x: 0, y:0})
                props.onIndexChange(prevIndex);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [props.onClose]);

    if(props.open)
        return <div className="scotch-image-gallery-modal">
            <div
                className={"scotch-image-gallery-modal-image"}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
                onMouseUp={handleMouseUp}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                <img
                    src={props.items[props.currentIndex].src}
                    alt="Selected"
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                        transition: isDragging ? 'none' : 'transform 0.2s',
                    }}
                />
            </div>

            <div className={"scotch-image-gallery-modal-close"}>
                <XCircleIcon
                    size={25}
                    onClick={props.onClose}
                />
            </div>

            <div className={"scotch-image-gallery-modal-info"}>
                {props.items[props.currentIndex].name}
            </div>


            <div className={"scotch-image-gallery-modal-footer"}>
                <div className="scotch-image-gallery-modal-footer-controls">
                    <ArrowLeftIcon
                        size={25}
                        onClick={prevImage}
                    />
                    <ZoomOutIcon
                        size={25}
                        onClick={zoomOut}
                    />
                    <ZoomInIcon
                        size={25}
                        onClick={zoomIn}
                    />
                    <ArrowRightIcon
                        size={25}
                        onClick={nextImage}
                    />
                </div>

                <div className="scotch-image-gallery-modal-thumbnails">
                    {thumbnailsToShow.map((image, index) => <div
                            key={index}
                            className={`scotch-image-gallery-modal-thumbnail`}
                            data-selected={index + start === props.currentIndex}
                            onClick={() => props.onIndexChange(index)}
                        >
                            <img
                                src={image.src}
                                alt={`Thumbnail ${props.currentIndex}`}
                            />
                        </div>
                    )}
                </div>
            </div>

        </div>

    return null
};
