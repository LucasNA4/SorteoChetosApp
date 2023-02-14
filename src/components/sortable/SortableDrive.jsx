import { SortableElement } from "react-sortable-hoc";


export const SortableDrive = SortableElement(({ couple }) => {
    return (
        <li className="list-group-item">{ couple.drive }</li>
    )
})