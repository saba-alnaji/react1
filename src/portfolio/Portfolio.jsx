import React from 'react'
import homeImg from './../assets/image/home.png'
import cakeImg from './../assets/image/cake.png'
import circusImg from './../assets/image/circus.png'
import gameImg from './../assets/image/game.png'
import safeImg from './../assets/image/safe.png'
import submarineImg from './../assets/image/submarine.png'
import style from './portfolio.module.css'


export default function Portfolio() {
  return (
    <>
      <section className='portfolio py-5'>
        <div className='container'>
          <h2 className={`${style.h2} text-uppercase fw-bold text-center mb-3`}>Portfolio</h2>
          <div className={`${style.divider} d-flex align-items-center justify-content-center my-3`}>
            <div className={style.line}></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="30"
              height="30" className={`${style.star} mx-3`}><path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" /></svg>
            <div className={style.line}></div>
          </div>
          <div className='row g-4'>
            <div className='col-md-4'>
              <div className="card" >
                <img src={homeImg} className="card-img-top w-100 rounded" alt="..." />
              </div>
            </div>
            <div className='col-md-4'>
              <div className="card" >
                <img src={cakeImg} className="card-img-top rounded" alt="..." />
              </div>
            </div>
            <div className='col-md-4'>
              <div className="card" >
                <img src={circusImg} className="card-img-top rounded" alt="..." />
              </div>
            </div>
            <div className='col-md-4'>
              <div className="card" >
                <img src={gameImg} className="card-img-top rounded " alt="..." />
              </div>
            </div>
            <div className='col-md-4'>
              <div className="card" >
                <img src={safeImg} className="card-img-top rounded" alt="..." />
              </div>
            </div>
            <div className='col-md-4'>
              <div className="card" >
                <img src={submarineImg} className="card-img-top rounded" alt="..." />
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}
