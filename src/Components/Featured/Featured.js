import React from 'react';
import './Featured.css';
import feature1 from '../../img/feature-1.jpg'
import feature2 from '../../img/feature-2.jpg'
import feature3 from '../../img/feature-3.jpg'
import levelup from '../../img/level-up.png'

const Featured = () => {
    return (
        <>
            <section className="featured-sec" id="feature-bg">
                <div className="feature-container">
                    <div className="fea-txt">
                        <h3>Featured</h3>
                    </div>
                    
                    <div className="featured-area">
                        <div className="left-f3a">


                            <div className="fea-card-wrap">
                                <div className="fea-card-body">
                                    <div className="crd-l3f">
                                        <img src={feature1} alt="" />
                                    </div>
                                    <div className="crd-rig">
                                        <h4>NFTS</h4>
                                        <a href = "/">Another World-Famous Meme <br />
                                            Capitalizes on the NFT hyper
                                        </a>
                                        <p>
                                            CRISTOPHER- SEP 6, 2021
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="fea-card-wrap">
                                <div className="fea-card-body">
                                    <div className="crd-l3f">
                                        <img src={feature2} alt="" />
                                    </div>
                                    <div className="crd-rig">
                                        <h4>BLOCKCHAIN</h4>
                                        <a href ="/">Another World-Famous Meme <br />
                                            Capitalizes on the NFT hyper
                                        </a>
                                        <p>
                                            CRISTOPHER- SEP 6, 2021
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="fea-card-wrap">
                                <div className="fea-card-body">
                                    <div className="crd-l3f">
                                        <img src={feature3} alt="" />
                                    </div>
                                    <div className="crd-rig">
                                        <h4>OPINIONS</h4>
                                        <a href ="/">Another World-Famous Meme <br />
                                            Capitalizes on the NFT hyper
                                        </a>
                                        <p>
                                            CRISTOPHER- SEP 6, 2021
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="right-f3a">
                            <div className="rig-img-wrap">
                                <div className="nft-card">
                                    <h4 className ="grn">
                                        NFTs
                                    </h4>
                                    <a href="/"><span className="exc">EXCLUSIVE</span> TechCrunch Founder to Sell His kyiv Flat - as <br /> an NFT</a> 
                                    <p className = "lgr">
                                        CRISTOPHER - AUG 6, 2021
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="lvlup">
                <div className="lvl-container">
                    <div className="lvl text-center">
                        <img  src={levelup} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Featured;