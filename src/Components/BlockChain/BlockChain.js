import './BlockChain.css'

const BlockChain = () => {

    const images = [
        'https://demo.tagdiv.com/newspaper_crypto_news_pro/wp-content/uploads/2021/06/6-1068x700.jpg',
        'https://demo.tagdiv.com/newspaper_crypto_news_pro/wp-content/uploads/2021/06/4-1068x714.jpg'
    ]
    
    return (
        <>
            {
                
                <section className="blockchain-sec" id="block-bg">
                <div className="container">
                    <div className="text-blockchain text-white pb-4">
                        <h2>Blockchain</h2>
                        <h2>NFTs</h2>
                        <h2>Videos</h2>
                    </div>

                    <div className="all-blc-cards">
                        <div className="blc-cards">
                            <div className="card-body">
                                <div className="blc-l3f">
                                    
                                    <h4>BLOCKCHAIN</h4>
                                    <a href="/">Crypto Comedians Question Queen's Bitcoin Interest</a>
                                    <p>
                                        CRISTOPHER - AUG 6, 2021
                                    </p>
                                </div>
                                <div className="blc-rig">
                                    <img src={images[0]} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
            }
        </>
    );
};

export default BlockChain;