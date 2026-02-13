import React from 'react'
import style from './header.module.css'

export default function Header() {
  return (
    <>
<nav className={`${style.navbar} navbar navbar-expand-lg navbar-dark p-4 `}>
        <div className="container ">
          <a className="navbar-brand text-uppercase fw-bold fs-3 " href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fw-bold  " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Portfolio">PORTFOLIO</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#about">ABOUT</a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-disabled="true"href="#contact">CONTACT</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}
