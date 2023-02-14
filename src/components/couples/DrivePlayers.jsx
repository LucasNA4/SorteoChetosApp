

export const DrivePlayers = ({ couples }) => {
    return (
        <div>
            {
                couples?.map( ({ couple }, i) => (
                    <li key={ i } className="list-group-item">{ couple.drive }</li>
                ))
            }
        </div>
    )
}