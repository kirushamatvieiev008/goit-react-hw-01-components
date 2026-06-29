import styles from "./Profile.module.css";

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <div className={styles.item}>
            <img className={styles.avatar} src={avatar} alt="image" />
            <h3 className={styles.name}>{username}</h3>
            <a href={"https://www.npmjs.com/package/gh-pages"}>@{tag}</a>
            <p className={styles.location}>{location}</p>
            <ul className={styles.plusInfo}>
                {Object.entries(stats).map(entrie => {
                    return(
                        <li key={entrie[0]}>
                            <p>{entrie[0]}</p>
                            <p className={styles.num}>{entrie[1]}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}