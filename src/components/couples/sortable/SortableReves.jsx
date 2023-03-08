import { SortableElement } from "react-sortable-hoc";


export const SortableReves = SortableElement(({ couple, iterator }) => {
    // console.log(iterator);
    return (
        <>
            {
                ( iterator === 4 ) ? <li className="list-group-item" style={{ marginTop: "100px" }}>{ couple.reves }</li> : <li className="list-group-item" style={{ margin: "0px" }}>{ couple.reves }</li>
    
            }
        </>
        // <li className="list-group-item" style={{ margin: "0px" }}>{ couple.reves }</li>
    )
})
