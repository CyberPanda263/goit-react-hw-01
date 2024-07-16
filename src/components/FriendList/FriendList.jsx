import css from "./FriendList.module.css";

const FriendList = ({friends}) => {
    return (
        <div className={css.FriendListBox}>
            <ul className={css.FriendList}>
                {friends.map(item => {
                    return (
                        <li key={item.id}>
                        <div className={css.FriendListItem}>
                            <img src={item.avatar} alt="Avatar" width="48" />
                            <p className={css.FriendListItemText}>{item.name}</p>
                            <p className={css.FriendListItemText}>{item.isOnline === true ? <span className={css.online}>Online</span> : <span className={css.Ofline}>Offline</span>}</p>
                        </div>
                    </li>
                    )
        })}
            </ul>
         </div>
    );
};

export default FriendList;