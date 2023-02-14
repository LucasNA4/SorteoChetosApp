import { SortableContainer } from "react-sortable-hoc"
import { SortableDrive } from "./SortableDrive"


export const SortableDrivePlayers = SortableContainer(({ couples }) => {
    return (
        <div>
            {
                couples?.map( ({ couple }, i) => (
                    <SortableDrive key={ i } couple={ couple } index={ i } />
                ))
            }
        </div>
    )
})