import React from 'react';
import "./Chip.scss"
import {ChipProps} from "./Chip.types";

export const Chip = (props: ChipProps) => {

    return <div className={"scotch-chip-wrapper" + (props.className ? " " + props.className : "")}>
        <div className="scotch-chip-content">{props.children}</div>
        {
            props.actions?.length
                ? <div className={"scotch-chip-actions"}>
                    {props.actions.map((a,i) => <React.Fragment key={i}>
                        {a}
                    </React.Fragment>)}
                </div>
                : null
        }
    </div>
}
