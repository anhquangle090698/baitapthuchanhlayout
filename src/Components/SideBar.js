import React, { Component } from 'react'
import '../SideBar.css'

export default class SideBar extends Component {
    render() {
        return (
            <>
                <div className="sideBar">
                    <h1>Shop Name</h1>
                    <ul>
                        <li><a href="#">Category 1</a></li>
                        <li><a href="#">Category 2</a></li>
                        <li><a href="#">Category 3</a></li>
                    </ul>
                </div>
                
            </>
        )
    }
}
