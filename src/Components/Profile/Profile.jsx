export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <div>
            <img src={avatar} alt="image" />
            <h3>{username}</h3>
            <a href={"https://www.npmjs.com/package/gh-pages"}>{tag}</a>
            <p>{location}</p>
            <ul>
                {Object.entries(stats).map(entrie => {
                    return(
                        <li key={entrie[0]}>
                            <p>{entrie[0]}</p>
                            <p>{entrie[1]}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}