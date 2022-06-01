import React from 'react'

export default function Home() {
  return (
    <section className="home" id="home">
        <div className="slide active">
            <div className="content">
                <img src="images/content-img-1.png" alt="" />
                <span>La définition de poster dans le dictionnaire est préparer pour être expédié et expédier, mettre dans une boîte aux lettres de la poste ou déposer à un bureau de poste.</span>
                <h3>포스터</h3>
                <a href="#" className="btn">read more</a>
                <div className="controls">
                    <div className="fas fa-angle-left" onclick="prev()"></div>
                    <div className="fas fa-angle-right" onclick="next()"></div>
                </div>
            </div>
            <div className="image">
                <img src="images/product/POSTER-MAIN.jpg" alt="" />
            </div>
        </div>

        <div className="slide">
            <div className="content">
                <img src="images/content-img-2.png" alt="" />
                <span>new arrivals 2022</span>
                <h3>accessories</h3>
                <a href="#" className="btn">read more</a>
                <div className="controls">
                    <div className="fas fa-angle-left" onclick="prev()"></div>
                    <div className="fas fa-angle-right" onclick="next()"></div>
                </div>
            </div>
            <div className="image">
                <img src="images/home-img-2.png" alt="" />
            </div>
        </div>

        <div className="slide">
            <div className="content">
                <img src="images/content-img-3.png" alt="" />
                <span>new collections</span>
                <h3>skin care</h3>
                <a href="#" className="btn">read more</a>
                <div className="controls">
                    <div className="fas fa-angle-left" onclick="prev()"></div>
                    <div className="fas fa-angle-right" onclick="next()"></div>
                </div>
            </div>
            <div className="image">
                <img src="images/home-img-3.png" alt="" / >
            </div>
        </div>

    </section>
  )
}
