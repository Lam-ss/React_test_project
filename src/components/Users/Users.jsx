import * as axios from 'axios';
import React from 'react';
import ava from '../../my_img/ava.jfif'
import styles from './Users.module.css'


class Users extends React.Component {

    // constructor(props) {
        // super(props);

    //     // axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //     //     this.props.setUsers(response.data.items);
    //     // });
    //     this.props.setUsers( [
    //         { id: 1, photoUrl: '../../../my_img/ava.jfif', followed: false, fullName: "Dmitry", status: "I am", location: { city: 'Minsk', country: "Belarus" } },
    //         { id: 2, photoUrl: '../../../my_img/ava.jfif', followed: true, fullName: "Dmitry2", status: "I am2", location: { city: 'Moscow', country: "Russia" } },
    //         { id: 3, photoUrl: '../../../my_img/ava.jfif', followed: false, fullName: "Dmitry3", status: "I am3", location: { city: 'Kiev', country: "Ukraine" } }
    //         ]
    //     );

    // }

    componentDidMount() {
        this.props.setUsers( [
            { id: 1, photoUrl: '../../../my_img/ava.jfif', followed: false, fullName: "Dmitry", status: "I am", location: { city: 'Minsk', country: "Belarus" } },
            { id: 2, photoUrl: '../../../my_img/ava.jfif', followed: true, fullName: "Dmitry2", status: "I am2", location: { city: 'Moscow', country: "Russia" } },
            { id: 3, photoUrl: '../../../my_img/ava.jfif', followed: false, fullName: "Dmitry3", status: "I am3", location: { city: 'Kiev', country: "Ukraine" } }
            ]
        );

    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         // axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //         //     this.props.setUsers(response.data.items);
    //         // });
    //         this.props.setUsers( [
    //             { id: 1, photoUrl: '../../../my_img/ava.jfif', followed: false, fullName: "Dmitry", status: "I am", location: { city: 'Minsk', country: "Belarus" } },
    //             { id: 2, photoUrl: '../../../my_img/ava.jfif', followed: true, fullName: "Dmitry2", status: "I am2", location: { city: 'Moscow', country: "Russia" } },
    //             { id: 3, photoUrl: '../../../my_img/ava.jfif', followed: false, fullName: "Dmitry3", status: "I am3", location: { city: 'Kiev', country: "Ukraine" } }
    //             ]
    //         )
    //     }
    // }

    render() {
        return ( 
            <div>
                {
                    this.props.users.map( u => <div key={u.id}>
                        <span>
                            <div>
                                <img src={ava} className={styles.userPhoto}/>
                            </div>
                            <div>
                                {u.followed 
                                    ? <button onClick={ () => { this.props.unfollow(u.id) } }>Unfollow</button> 
                                    : <button onClick={ () => { this.props.follow(u.id) } }>Follow</button>}
                                
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
        )
    }
}



export default Users;