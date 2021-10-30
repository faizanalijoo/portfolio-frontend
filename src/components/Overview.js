import styles from "./Overview.module.css"
import React, { useState } from 'react'
import briefcase from "../resources/briefcase.png"
import medal from "../resources/medal.png"
import rupee from "../resources/rupee.png"
import websitelogo from '../resources/websitelogo.png'
import locationlogo from "../resources/locationlogo.png"
import starlogo from "../resources/star.png"
import phonelogo from "../resources/phonelogo.png"
import emaillogo from "../resources/emaillogo.png"
import Footer from "./Footer"

let data = [{
    image: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'
},
{
    image: 'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk='
},
{
    image:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg'
}]

function Overview(){

    let [current, setCurrent] = useState(0)
    const length = data.length

    let questionHandler = (e)=>{
        e.target.parentElement.children[1].classList.toggle(styles.hide)
     }


    let nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    let prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current);

    return <React.Fragment>
        <div className={styles.header}>
        <img className={styles.headerImage} src='https://www.constructionexec.com/assets/site_18/images/article/081219110833.jpg?width=1280' />
        <div className={styles.headerContent}>
            <h1>NAME OF THE COMPANY</h1>
            <div className={styles.occupations}>
                <p>Occupation one</p>
                <p>Occupation two</p>
                <p>Occupation three</p>
               
            </div>
            <div className={styles.websiteName}>
                <img src={websitelogo} alt='website logo'/>
                <a href='www.google.com'>www.websitename.com</a>
            </div>
            <div className={styles.phone}>
            <img src={phonelogo}/>
            <p>1234567890</p>
            </div>
            <div className={styles.email}>
            <img src={emaillogo}/>
            <p>example@gmail.com</p>
            </div>
            <div className={styles.address}>
            <img src={locationlogo}/>
            <p>New Delhi, India, 120001</p>
            </div>
            
            <div className={styles.line}></div>
            <div className={styles.headerCards}>
                <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between'}}>
                    <img src={briefcase} />
                    <div><h2>10000+</h2>
                    <p>Projects</p></div>
                </div>
                <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between'}}>
                <img src={medal} />
                <div><h2>12+</h2><p>Experience</p></div>
                </div>
                <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between'}}>
                <img src={rupee} />
                <div><h2>20L</h2><p>Average</p></div>
                </div>
            </div>
        </div>
        </div>
        <div className={styles.catalogue}>
            <h1>CATALOGUE</h1>
            <div className={styles.catalogueImages}>
                <div className={styles.image}><img src='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg' /></div>
                <div className={styles.image}><img src='https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' /></div>
                <div className={styles.image}><img src='https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg' /></div>
                <div className={styles.image}><img src='https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg' /></div>
                <div className={styles.image}><img src='https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' /></div>
                <div className={`${styles.image} ${styles.lastImage}`}><img src='https://images.ctfassets.net/hrltx12pl8hq/66lRNN2kfHcVSUMrmrcKxf/76b78071032586ff9766d8eb51592f21/free-nature-images.jpg?fit=fill&w=840&h=350' /><p className={styles.moreImages}>+3</p></div>
            </div>
        </div>
        <div className={styles.highlights}>
            <h1>HIGHLIGHTS</h1>
            <div className={styles.highlightsInner}>
                <div className={styles.highlight}><img src={starlogo}/>Highlight one</div>
                <div className={styles.highlight}><img src={starlogo}/>Highlight two</div>
                <div className={styles.highlight}><img src={starlogo}/>Highlight three</div>
            </div>
        </div>
        <div className={styles.faq}>
            <h1 className={styles.largeSc}>FREQUENTLY ASKED QUESTIONS</h1>
            <h1 className={styles.smallSc}>FAQs</h1>
            <div className={styles.questions}>
            <div>
                <h3 style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} onClick={questionHandler}>Question One <span>+</span></h3>
                <p className={styles.hide}>Answer to question one</p>
            </div>
            <div className={styles.line}></div>
            <div>
                <h3 style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} onClick={questionHandler}>Question Two <span>+</span></h3>
                <p className={styles.hide}>Answer to question two</p>
            </div>
            <div className={styles.line}></div>
            <div>
                <h3 style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} onClick={questionHandler}>Question Three <span>+</span></h3>
                <p className={styles.hide}>Answer to question three</p>
            </div>
            <div className={styles.line}></div>
            <div>
                <h3 style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} onClick={questionHandler}>Question Four <span>+</span></h3>
                <p className={styles.hide}>Answer to question four</p>
            </div>
            </div>
        </div>
        {/* <div className={styles.slider}>
            <button onClick={prevSlide} className={styles.prevBtn}>Prev</button>
            <button onClick={nextSlide}  className={styles.nextBtn}>Next</button>
           <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <img className={styles.sliderimage} src={data[current].image} />
           </div>
        </div> */}
        <Footer />
      </React.Fragment>
}

export default Overview