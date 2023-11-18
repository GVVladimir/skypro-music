
export const UserList = ({users}) => {
    return (
        <ul className = 'UserList__List'>
            {users.map((user) =>(
                <li key={user.id} className="UserList__list-item">
                    <img src={user.avatar} alt="{user.firstName"/>
                    <p className="UserList__name">
                        {user.firstName} {user.lastName}
                    </p>
                </li>
            ))}
        </ul>
    )
}