import css from "./FriendListItem.module.css";

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <div className={css.FriendListItem}>
                <img src={avatar} alt="Avatar" width="48" />
                <p className={css.FriendListItemText}>{name}</p>
            <p className={css.FriendListItemText}>{isOnline === true ? <span className={css.online}>Online</span> : <span className={css.Ofline}>Offline</span>}</p>
        </div>
    );
};

export default FriendListItem;