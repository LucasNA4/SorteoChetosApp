import { SortableElement } from "react-sortable-hoc";


export const SortableDrive = SortableElement(({ couple, iterator }) => {
    return (
        <>
            {
                ( iterator === 4 ) ? <li className="list-group-item" style={{ marginTop: "100px" }}>{ couple.drive }</li> : <li className="list-group-item" style={{ margin: "0px" }}>{ couple.drive }</li>
            }
        </>
    )
})
