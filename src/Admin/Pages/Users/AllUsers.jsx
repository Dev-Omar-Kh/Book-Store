import React from 'react'
import FakeUsers from './Users'
import { Link } from 'react-router-dom';

import { BiErrorAlt } from 'react-icons/bi'
import { FaUsersViewfinder } from 'react-icons/fa6'
import { IoBanSharp } from 'react-icons/io5';

import titlesCSS from '../../../Styles/db_title.module.css';
import tableCSS from '../../../Styles/db_tables.module.css';

export default function AllUsers() {

    return <React.Fragment>

        <div className={titlesCSS.container}>

            <div className={titlesCSS.title}>

                <div className={titlesCSS.title_box}>

                    <FaUsersViewfinder />
                    <p>Users</p>

                </div>

                <div className={titlesCSS.actions}>

                    <Link to={'add'}>Add Admin</Link>

                </div>

            </div>

            <div className={tableCSS.table_cont}>

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
