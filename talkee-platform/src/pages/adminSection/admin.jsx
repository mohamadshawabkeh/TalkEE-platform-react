import React, { useState } from "react";
import { useSprings, animated } from '@react-spring/web';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./admin.css";
import adminSection from "../../assets/icons/adminSection.svg";
import Notification from "../notification/notification";

export default function Admin() {
    const [users] = useState([
        { id: 1, name: "Mohammad", status: "Active", reactions: 5, comments: 2 },
        { id: 2, name: "Marwan", status: "Inactive", reactions: 3, comments: 1 },
    ]);

    const stats = [
        { label: "Total Users", value: 150 },
        { label: "Total Posts", value: 100 },
        { label: "Total Comments", value: 300 },
    ];

    // Create springs for each stat value
    const springs = useSprings(
        stats.length,
        stats.map(stat => ({
            from: { value: 0 },
            to: { value: stat.value },
            config: { duration: 3000 },
        }))
    );

    const chartData = stats.map(stat => ({
        name: stat.label,
        value: stat.value,
    }));

    return (
        <section className="homeSection">
            <div className="homeNav">
                <div className="AdminContainer">
                <div className="headerPart">
                    <div className="leftSideContainerHome">
                       <img src={adminSection} alt="home icon" className="homeIcon" />
                           <div className="banner">
                                <h3 className="username">
                                    your name
                               </h3>
                                <h5 className="totalPosts">
                                    total posts
                                </h5>
                          </div>      
                    </div>
                    <Notification/>
                  </div>

                    <div className="userTable">
                        <h2>User Management</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Reactions</th>
                                    <th>Comments</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.status}</td>
                                        <td>{user.reactions}</td>
                                        <td>{user.comments}</td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="dropbtn">Actions</button>
                                                <div className="dropdown-content">
                                                    <a href="#">Delete User</a>
                                                    <a href="#">Block User</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="postManagement">
                        <h2>Post Management</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Post Title</th>
                                    <th>Author</th>
                                    <th>Date Created</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sample Post</td>
                                    <td>Mohammad</td>
                                    <td>2023-10-10</td>
                                    <td>
                                        <div className="dropdown">
                                            <button className="dropbtn">Actions</button>
                                            <div className="dropdown-content">
                                                <a href="#">Delete Post</a>
                                                <a href="#">Edit Post</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="analytics">
                        <h2>Analytics Dashboard</h2>
                        <div className="analytics-stats">
                            {springs.map((animatedValue, index) => (
                                <div key={stats[index].label}>
                                    <animated.h3>
                                        {animatedValue.value.to(v => Math.floor(v))}
                                    </animated.h3>
                                    <p>{stats[index].label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="chart">
                            <h3 style={{padding: '20px'}}>Statistics Overview</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#1A91DA" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
