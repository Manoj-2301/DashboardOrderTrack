import React from 'react'
import './sideStyle.scss'
import Shipment from '../Component/shippmentMap'

const page = () => {
    return (
        <div className='side_main'>
            <div className='side_content'>
                <div className='side_icon'>
                    <p>Shipment</p>
                    <i className="fi fi-rr-menu-dots"></i>
                    <i className="fi fi-sr-progress-download"></i>
                </div>
                <button className='btn_icon'>
                    <i className="fi fi-br-plus"></i>
                    <p className='add'>Add Shipment</p>
                </button>
            </div>
            <div className='side_second_part'>
                <div className='side_second_list'>
                    <div className='side_second_menu first'>
                        <i className="fi fi-bs-newspaper"></i>
                        <p className='order'>All Orders</p>
                    </div>
                    <div className='side_second_menu'>
                        <i className="fi fi-ss-triangle-warning"></i>
                        <p>Pending</p>
                    </div>
                    <div className='side_second_menu'>
                        <i className="fi fi-bs-map-marker-home"></i>
                        <p>Arrived</p>
                    </div>
                    <hr className='horView' />
                    <div className='side_second_menu second'>
                        <i className="fi fi-br-plus"></i>
                        <p>View</p>
                    </div>
                </div>
                <div className='side_setting'>
                    <div className='side_second_menu'>
                        <i className="fi fi-rs-settings"></i>
                        <p>View Setting</p>
                    </div>
                    <hr />
                    <div className='drop_bg'>
                        <i className="fi fi-rr-angle-small-up"></i>
                    </div>
                </div>
            </div>
            <hr className='hori' />
            <div className='third_row'>
                <div className='search_container'>
                    <div className='search'>
                        <i className="fi fi-rr-search"></i>
                        <input placeholder='Search' />
                    </div>
                    <hr />
                    <div className='search_date'>
                        <p>2 Feb -14 Feb </p>
                        <i className="fi fi-rs-angle-small-down"></i>
                    </div>
                    <div className='search_shipment'>
                        <p>All Shipment Status</p>
                        <i className="fi fi-rs-angle-small-down"></i>
                    </div>
                    <div className='search_filter'>
                        <p>Advance Filters</p>
                        <i className="fi fi-rs-angle-small-down"></i>
                    </div>
                    <hr />
                    <div>Hide</div>
                </div>
                <div className='search_manage'>
                    <i className="fi fi-sr-garage"></i>
                    <p>Manage Table</p>
                </div>
            </div>
            <Shipment/>
        </div>
    )
}

export default page