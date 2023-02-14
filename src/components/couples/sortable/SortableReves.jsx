import { SortableElement } from "react-sortable-hoc";


export const SortableReves = SortableElement(({ couple }) => {
    return (
        <li className="list-group-item">{ couple.reves }</li>
    )
})
