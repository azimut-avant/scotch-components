import React, {useState, useEffect, useRef, useCallback} from 'react'
import {Popover, PopoverContent, PopoverTrigger} from '../Popover/Popover';
import "./Select.scss"
import {
    _ChipSearchMultiSelectProps,
    SelectItem
} from "./Select.types";
import Icon from "@mdi/react";
import {mdiCheck, mdiChevronDown, mdiClose, mdiDelete, mdiPencil, mdiPlus, mdiSelectSearch} from "@mdi/js";
import {IconButton} from "../Button/IconButton";
import {Chip} from "../Chip/Chip";


export const ChipSearchMultiSelect = (props: _ChipSearchMultiSelectProps) => {
    const [open,setOpen] = useState(false)
    const inputRef = useRef(null)
    const popoverContentRef = useRef(null)
    const iconRef = useRef(null)

    const [calcWidth, setWidth] = useState(props.width)
    const targetRef = useRef(null)

    const [searchValueState, setSearchValueState] = useState("");
    const [filteredItems, setFilteredItems] = useState(props.items);

    useEffect(() => {
        setFilteredItems(props.items.filter(x => x.label.toLocaleLowerCase().includes(searchValueState.toLocaleLowerCase())));
    }, [props.items])

    useEffect(() => {
        setFilteredItems(props.items.filter(x => x.label.toLocaleLowerCase().includes(searchValueState.toLocaleLowerCase())));
    }, [searchValueState])

    // const [selected, setSelected] = useState(props.value)
    useEffect(() => {
        if (targetRef.current) {
            setWidth(targetRef.current.offsetWidth + "px");
        }
    }, [targetRef]);

    const toggleSelect = (value: SelectItem) => {
        if(props.value.some(x=>x.value === value.value)){
            props.onSelect(props.value.filter(x => x.value !== value.value))
        }
        else{
            props.onSelect([...props.value, value]);
        }
    }

    const toggleSelectChip = (value: SelectItem) => {
        if(props.value.some(x=>x.value === value.value)){
            props.onSelect(props.value.filter(x => x.value !== value.value))
        }
        else{
            props.onSelect([...props.value, value]);
        }
        setSearchValueState('')
        setOpen(false)
    }

    const onCloseSearch = () => {
        // props.onClose()
        setSearchValueState('')
        setOpen(false);
    }

    useEffect(() => {
        if(open)
            inputRef.current.focus()
    }, [open])

    const handleKeyPressed = useCallback((event) => {
        if (event.key === 'Enter' && props.onCreateItem) {
            if (searchValueState.trim() !== "" && props.items.find(x => x.label === searchValueState) === undefined) {
                props.onCreateItem(searchValueState);
            }
        }
    }, [searchValueState, props.items, props.onCreateItem]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                (popoverContentRef.current == null || !popoverContentRef.current.contains(event.target)) &&
                !inputRef.current.contains(event.target) &&
                (iconRef.current == null || !iconRef.current.contains(event.target))
            ) {
                onCloseSearch();
            }
        };

        document.addEventListener('mousedown',   handleClickOutside);
        document.addEventListener('keypress', handleKeyPressed);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keypress', handleKeyPressed);
        };
    }, [handleKeyPressed]);

    const chips = React.useMemo(() => {
        return props.value.map((item, index) => (
            <Chip key={"chip-" + index} text={item.label} onDelete={() => toggleSelectChip(item)} />
        ))
    }, [props.value])

    let popoverContents = <div className={"scotch-select-dropdown--container"} ref={popoverContentRef}>
        {filteredItems.map(x => <div
            className={`scotch-select-multi-dropdown--item`}
            key={"d-content-"+x.value}
        >
            <div className={"scotch-select-multi-dropdown--item-value"}  onMouseDown={() => toggleSelect(x)}>{x.label}</div>
            <div>
                {props.value.some(value => value.value === x.value) && <Icon path={mdiCheck} size={"18px"} />}
            </div>
        </div>)}
    </div>


    return <div
        className={"scotch-select-container"}
        style={{width: props.width}}
        // onClick={() => setOpen(true)}
        ref={targetRef}
    >
        <Popover open={open && filteredItems.length>0} focus={false} onOpenChange={() => setOpen(false)} placement={"bottom-end"} >
            <PopoverTrigger>
                <div className={"scotch-select--input"}>
                    <div className={"scotch-select-selected-value"}>
                        <input
                            ref={inputRef}
                            className={"scotch-select--input-input"}
                            onChange={e => {
                                setSearchValueState(e.target.value);
                            }}
                            value={searchValueState}
                            placeholder={props.placeholder || "Select"}
                            onClick={() => {setOpen(true)}}
                        />
                    </div>
                    <div className={"scotch-input--icon"}>
                        {
                            !open ? <Icon path={mdiSelectSearch} size={"20px"} /> : null
                        }
                        {
                            open && searchValueState.trim() !== "" && props.items.find(x => x.label === searchValueState) === undefined
                                ? <div ref={iconRef}><IconButton path={mdiPlus} size={"20px"} onClick={() => props.onCreateItem(searchValueState)}/></div>
                                : null
                        }
                    </div>
                </div>
            </PopoverTrigger>
            <PopoverContent width={calcWidth}>
                {popoverContents}
            </PopoverContent>
        </Popover>
        <div className={"scotch-select-multi-input--list"}>
            {chips}
        </div>
    </div>
}
