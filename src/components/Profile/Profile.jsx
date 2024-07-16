import css from "./Profile.module.css";

 const Profile = ({ name, tag, location, image, stats }) => {
    return (
        
        <div className={css.UserCard}>
            <div className={css.li}>
                <img className={css.avatar} src={image} alt="User avatar" />
                <p className={css.title}>{name}</p>
                <p className={css.li}>@{tag}</p>
                <p className={css.li}>{location}</p>
            </div>

            <ul className={css.tag}>
                <li className={css.tagItem}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={css.tagItem}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={css.tagItem}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;