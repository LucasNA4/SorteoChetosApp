import { SortableContainer } from "react-sortable-hoc"
import { SortableItem } from "./SortableItem"


export const SortableList = SortableContainer(({ couples }) => {
    return (
        <div>
            {
                couples?.map( ({ couple }, i) => (
                    <SortableItem key={ i } couple={ couple } index={ i } />
                ))
            }
        </div>
    )
})
