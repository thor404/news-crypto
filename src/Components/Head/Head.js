import React from 'react';
import './Head.css'

const Head = () => {
    return (
        <>
            <section className="sec-container" id="bg">
                <div className="wrap-head txt">
                    <div className="hero-txt">
                        <h1 className = "pb-4">Stay in the Loop</h1>
                        <p className ="pb-4">
                            Get the daily email from CryptoNews that makes reading the news actually <br />
                            enjoyable. Join our mailing list to stay in the loop to stay informed, for free.
                        </p>
                        <div className="ipt">
                            <input type="text" />
                            <button className="inpt-btn">
                                Subscrib
                            </button>
                        </div>
                        <div className="chk pt-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label fff" for="flexCheckDefault">
                                I've read and accept the <a href="/">Privacy policy</a>.
                            </label>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Head;