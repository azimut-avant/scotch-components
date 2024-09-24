import React, {ReactNode} from "react";

export interface SelectItem{
    value: number
    label: string
}

interface CommonSelectProps{
    items: Array<SelectItem>,
    onSelect: (value: SelectItem | null) => void,
    value: SelectItem | null, // initial
    nullable?: boolean
    width?: string,
    placeholder?: string
}

interface SimpleSelectProps{
    searchable: false
}

interface SearchSelectProps{
    searchable: true
    searchValue: string,
    onSearch: (value: string) => void,
}

export type SelectProps = CommonSelectProps & (SimpleSelectProps | SearchSelectProps)

interface CommonMultiSelectProps{
    items: Array<SelectItem>
    onSelect: (values: Array<SelectItem>) => void
    value: Array<SelectItem>
    width?: string
    placeholder?: string
}

interface SimpleMultiSelectProps{
    searchable: false
}

interface SearchMultiSelectProps{
    searchable: true
    searchValue: string
    onSearch: (value: string) => void
    initActiveSearchOff?: boolean
}

interface ChipSearchMultiSelectProps{
    onCreateItem?: (x: string) => void,
}

export type MultiSelectProps = CommonMultiSelectProps & (SimpleMultiSelectProps | SearchMultiSelectProps)
export type _SimpleMultiSelectProps = CommonMultiSelectProps
export type _SearchMultiSelectProps = CommonMultiSelectProps & SearchMultiSelectProps
export type _ChipSearchMultiSelectProps = CommonMultiSelectProps & ChipSearchMultiSelectProps
