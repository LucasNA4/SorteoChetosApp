import { SortableElement } from "react-sortable-hoc";


export const SortableItem = SortableElement(({ couple }) => {
    return (
        <li className="list-group-item">{ couple.reves }</li>
    )
})
