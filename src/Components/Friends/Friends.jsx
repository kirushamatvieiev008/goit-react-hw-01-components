export const Friends = ({friends}) => {
    return (
        <ul>
            {friends.map(friend => {
                return (<li key={friend.id}>
                    <img src={friend.avatar} alt="#" />
                    <h3>{friend.name}</h3>
                    <p>{friend.isOnline ? "online" : "ofline"}</p>

                </li>)
            })}
        </ul>
    )
}