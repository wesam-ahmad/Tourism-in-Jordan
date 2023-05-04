import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-center text-white">

                {/* Copyright */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2020 Copyright:
                    <a className="text-white" href="">   JO </a>
                </div>
                {/* Copyright */}
            </footer>

        </>

    )
}

export default Footer