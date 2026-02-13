import React from 'react'
import style from './footer.module.css'

export default function Footer() {
  return (
    <section className={`${style.footer} py-5 text-white text-center`}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h3 className="text-uppercase fw-bold mb-3 fs-5">Location</h3>
            <p className="mb-0">
              2215 John Daniel Drive <br />
              Clark, MO 65243
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="text-uppercase fw-bold mb-3 fs-5">Around the Web</h3>

            <div className="d-flex justify-content-center gap-3">

              <div className={`${style.icon} rounded-circle d-flex justify-content-center align-items-center`}>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="22" width="22" viewBox="0 0 640 640">
                    <path 
                      d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
                  </svg>
                </a>
              </div>

              <div className={`${style.icon} rounded-circle d-flex justify-content-center align-items-center`}>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="22" width="22" viewBox="0 0 640 640">
                    <path 
                      d="M523.4 215.7C523.7 220.2 523.7 224.8 523.7 229.3C523.7 368 418.1 527.9 225.1 527.9C165.6 527.9 110.4 510.7 64 480.8C72.4 481.8 80.6 482.1 89.3 482.1C138.4 482.1 183.5 465.5 219.6 437.3C173.5 436.3 134.8 406.1 121.5 364.5C128 365.5 134.5 366.1 141.3 366.1C150.7 366.1 160.1 364.8 168.9 362.5C120.8 352.8 84.8 310.5 84.8 259.5L84.8 258.2C98.8 266 115 270.9 132.2 271.5C103.9 252.7 85.4 220.5 85.4 184.1C85.4 164.6 90.6 146.7 99.7 131.1C151.4 194.8 229 236.4 316.1 240.9C314.5 233.1 313.5 225 313.5 216.9C313.5 159.1 360.3 112 418.4 112C448.6 112 475.9 124.7 495.1 145.1C518.8 140.6 541.6 131.8 561.7 119.8C553.9 144.2 537.3 164.6 515.6 177.6C536.7 175.3 557.2 169.5 576 161.4C561.7 182.2 543.8 200.7 523.4 215.7z" />
                  </svg>
                </a>
              </div>

              <div className={`${style.icon} rounded-circle d-flex justify-content-center align-items-center`}>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="22" width="22" viewBox="0 0 640 640">
                    <path 
                      d="M196 224H64V576H196V224zM130 64C88.4 64 64 92.5 64 128.6C64 164.7 87.6 193.2 128.3 193.2H129C171 193.2 196 164.7 196 128.6C195.2 92.5 171 64 130 64zM576 576H444V385.1C444 336.2 432.6 303.1 387.7 303.1C353.5 303.1 332.7 326.3 323.7 348.6C320.7 356 320 365.5 320 375V576H188C190.2 246.2 188 224 188 224H320V272.9C337.7 245.5 368.4 205.5 432.4 205.5C514.2 205.5 576 258.8 576 373.3V576z" />
                  </svg>
                </a>
              </div>
              <div className={`${style.icon} rounded-circle d-flex justify-content-center align-items-center`}>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 640 640"  height="22" width="22"><path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM484 186.4C513.5 222.4 531.4 268.4 531.8 318.4C524.8 316.9 454.8 302.7 384.3 311.6C378.5 297.6 373.1 285.2 365.7 270C444 238 479.5 192.5 484 186.5zM460.4 161.9C456.6 167.3 424.7 210.2 349.4 238.4C314.7 174.6 276.2 122.2 270.4 114.4C337.6 98.2 408.4 115.7 460.5 161.9zM229.9 128.6C235.5 136.3 273.3 188.7 308.4 251.1C209.3 277.4 122 277 112.6 276.9C126.3 211.2 170.6 156.5 229.9 128.6zM108.2 320.3C108.2 318.1 108.2 316 108.3 313.8C117.6 314 220.2 315.3 326 283.7C332.1 295.6 337.9 307.6 343.2 319.6C266.6 341.2 197 403.1 162.7 461.9C128.9 424.3 108.2 374.7 108.2 320.3zM190 487.4C212.1 442.2 272.2 383.8 357.6 354.6C387.3 431.9 399.6 496.7 402.8 515.2C334.7 544.2 252.8 536.3 190 487.3zM438.4 495.9C436.2 483 425 421 397.2 344.9C463.6 334.3 521.9 351.7 529.1 354C519.7 412.9 485.8 463.8 438.3 496z" /></svg>
                </a>
              </div>

            </div>
          </div>

          <div className="col-md-4">
            <h3 className="text-uppercase fw-bold mb-3 fs-5">About Freelancer</h3>
            <p className="mb-0">
              Freelance is a free to use, MIT licensed Bootstrap theme created by{" "}
              <a href="#" className={style.link}>Start Bootstrap</a>.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}