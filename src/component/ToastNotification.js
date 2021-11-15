import React from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CustomToast = ({ closeToast }) => {
    return (
        <div>
            Something went wrong!
            <button onClick={closeToast} >Close</button>
        </div>
    )
}
toast.configure()

export const ToastNotification = () => {
    
    const toastDemo = () => {
        toast('Basic Notification!')
        toast.success('Success Notification!', { position: toast.POSITION.TOP_CENTER, autoClose: false })
        toast.warn('Warning Notification!', { position: toast.POSITION.BOTTOM_LEFT, autoClose: 4000 })
        toast.info('Info Notification!', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000 })
        toast.error('Error Notification!', { position: toast.POSITION.BOTTOM_CENTER, autoClose: 6000 })
        toast(<CustomToast />, { position: toast.POSITION.TOP_LEFT, autoClose: false })
    }

    return (
        <div>
            <h1>Toast Notifications Demo</h1>
            <button onClick={toastDemo} >Click here...</button>
        </div>
    )
}









