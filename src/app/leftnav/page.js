import React from 'react'
import './leftStyle.scss'
import Link from 'next/link'

const page = () => {
    return (
        <div className='left'>
            <div className='left_nav_menu'>
                <div className='first_para'>
                    <p className='menu_firstpara'>WORKSPACE</p>
                    <i className="fi fi-br-menu-burger"></i>
                </div>
                <div className='menu order'>
                    <p>Order List</p>
                    <div>
                        <p className='drop_menu'>20</p>
                    </div>
                </div>
                <div className='menu shipment'>
                    <Link href="/shipment">Shipment</Link>
                    <div className='shipment_numb'>
                        <p>New 8</p>
                    </div>
                </div>
                <div className='menu return'>
                    <p>Return & Refund</p>
                    <div>
                        <p className='drop_menu'>4</p>
                    </div>
                </div>
                <div className='setting_card'>
                    <div className='setting'>
                        <p>SETTINGS</p>
                    </div>
                    <div className=''>
                        <p>Custom Tracking Page</p>
                    </div>
                    <div className=''>
                        <p>Carrier Intergration</p>
                    </div>
                    <div className=''>
                        <p>Automation</p>
                    </div>
                </div>
                <div className='Drop'>
                    <p>Need some help?</p>
                    <p className='drop_word'>Drop us a word</p>
                </div>
            </div>
        </div>
    )
}

export default page