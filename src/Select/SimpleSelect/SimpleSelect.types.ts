import React, {ReactNode} from "react";
import {SelectItem} from "../types"

interface SimpleSelectPropsNonNullable {
    /** Array of items */
    items: SelectItem[],

    /** Function to select item */
    onSelect: (value: SelectItem) => void,

    /** Current selection */
    value: SelectItem,

    /** Nullability */
    nullable: false
}

interface SimpleSelectPropsNullable {
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
}

export type SimpleSelectProps = SimpleSelectPropsNullable | SimpleSelectPropsNonNullable

