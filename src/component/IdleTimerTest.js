import React, { useState, useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

export const IdleTimerTest = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const idleTimerRef = useRef(null)
    const sessionTimeOutRef = useRef(null)
    const onIdle = () => {
        if (isLoggedIn === true) {
            console.log('User is Idle')
            setModalIsOpen(true)
            sessionTimeOutRef.current=setTimeout(logOut, 5000)
        }
    }
    const stayActive = () => {
        setIsLoggedIn(true)
        setModalIsOpen(false)
        clearTimeout(sessionTimeOutRef.current)
        console.log('User is Active!')
    }
    const logOut = () => {
        setIsLoggedIn(false)
        setModalIsOpen(false)
        clearTimeout(sessionTimeOutRef.current)
        console.log('User is LogOut!')
    }
    return (
        <div>
            <h1>Idle Timer Demo</h1>
            {
                isLoggedIn ? <h2>Sandeep</h2> : <h2>Hello Guest</h2>
            }
            <Modal isOpen={modalIsOpen} >
                <h2>Login</h2>
                Email: <input type='text' />
                Password: <input type='text' />
                <button onClick={logOut} >LogOut</button>
                <button onClick={stayActive} >Login</button>
            </Modal>
            <IdleTimer ref={idleTimerRef} onIdle={onIdle} timeout={5 * 1000} ></IdleTimer>
        </div>
    )
}
