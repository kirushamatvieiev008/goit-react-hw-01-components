import styles from "./Friends.module.css";

export const Friends = ({friends}) => {
    return (
        <ul className={styles.friendsList}>
            {friends.map(friend => {
                return (<li key={friend.id}>
                    <div className={`${friend.isOnline ? styles.online : styles.offline} ${styles.basic}`}></div>
                    <img src={friend.avatar} alt="#" />
                    <h3>{friend.name}</h3>

                </li>)
            })}
        </ul>
    )
}