import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'

export default class BaiTapThucHanhLayOut extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="row">
                    <div className="col-lg-2">
                        <SideBar></SideBar>
                    </div>
                    <div className="col-lg-10">
                        <Content></Content>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
