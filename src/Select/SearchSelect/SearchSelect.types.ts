import {SelectItem} from "../types"

interface SearchSelectPropsNonNullable {
    /** Array of items */
    items: SelectItem[],

    /** Function to select item */
    onSelect: (value: SelectItem) => void,

    /** Current selection */
    value: SelectItem,

    /** Nullability */
    nullable: false

    /** Search value */
    searchValue: string

    /** Hook on search value change */
    onSearchValueChange: (s: string) => void
}

interface SearchSelectPropsNullable {
    /** Array of items */
    items: SelectItem[],

    /** Function to select item */
    onSelect: (value: SelectItem | null) => void,

    /** Current selection */
    value: SelectItem | null,

    /** Input placeholder */
    placeholder?: string,

    /** Nullability */
    nullable: true

    /** Search value */
    searchValue: string

    /** Hook on search value change */
    onSearchValueChange: (s: string) => void
}

export type SearchSelectProps = SearchSelectPropsNullable | SearchSelectPropsNonNullable

