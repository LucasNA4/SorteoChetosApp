import { SortableContainer } from "react-sortable-hoc"
import { SortableReves } from "./SortableReves"


export const SortableRevesPlayers = SortableContainer(({ couples }) => {
    return (
        <div>
            {
                couples?.map( ({ couple }, i) => (
                    <SortableReves key={ i } couple={ couple } index={ i } />
                ))
            }
        </div>
    )
})
