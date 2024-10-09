import React, { useEffect, useState } from 'react'
import FakeUsers from './Users'

import { BiErrorAlt } from 'react-icons/bi'
import { FaUsersViewfinder } from 'react-icons/fa6'
import { IoBanSharp } from 'react-icons/io5';

import titlesCSS from '../../../Styles/db_title.module.css';
import tableCSS from '../../../Styles/db_tables.module.css';

export default function AllUsers() {

    // ====== title-height ====== //

    const [titleHeight, setTitleHeight] = useState(0);

    useEffect(() => {

        const title = document.getElementById('title');

        if(title){

            setTitleHeight(title.offsetHeight);

        }

    } , []);

    return <React.Fragment>

        <div className={titlesCSS.container}>

            <div id='title' className={titlesCSS.title}>

                <div className={titlesCSS.title_box}>

                    <FaUsersViewfinder />
                    <p>Users</p>

                </div>

            </div>

            <div 
                className={tableCSS.table_cont}
                style={titleHeight ? {height : `calc(100% - calc(${titleHeight}px + 30px))`} : {}} 
            >

                {FakeUsers.length > 0 ?
                    <table className={tableCSS.table}>

                        <thead>

                            <tr>

                                <th>User Name</th>
                                <th>User Email</th>
                                <th>User Phone</th>
                                <th>User Role</th>
                                <th>User Ban</th>

                            </tr>

                        </thead>

                        <tbody>

                            {FakeUsers.map(user => <tr key={user.id}>

                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button 
                                        // onClick={() => firstDeleteStep(user)}
                                        className={`${tableCSS.actions} ${tableCSS.delete}`}
                                    >
                                        <IoBanSharp className={tableCSS.action_icon} />
                                        Ban
                                    </button>
                                </td>

                            </tr>)}

                        </tbody>

                    </table> :
                    <div className={tableCSS.empty_doc}>

                        <BiErrorAlt />
                        <h3>No Users Data</h3>

                    </div>
                }

            </div>

        </div>

    </React.Fragment>

}
