import styles from "./Overview.module.css"
import React, { useState, useEffect } from 'react'
import briefcase from "../resources/briefcase.png"
import medal from "../resources/medal.png"
import rupee from "../resources/rupee.png"
import websitelogo from '../resources/websitelogo.png'
import locationlogo from "../resources/locationlogo.png"
import starlogo from "../resources/star.png"
import phonelogo from "../resources/phonelogo.png"
import emaillogo from "../resources/emaillogo.png"
import loader from "../resources/loader.gif"
import people from "../resources/people.png"
import Footer from "./Footer"
import axios from 'axios';

function Overview(props){

    const [details, setDetails] = useState();
    let [loading ,setLoading] = useState(false)

    // let [current, setCurrent] = useState(0)
    // const length = data.length
    // let nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // }
    // let prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }

    let questionHandler = (e)=>{
        e.target.parentElement.children[1].classList.toggle(styles.hide)
     }


    let _getUserDetails = async () => {
        setLoading(true)
        let res = await axios.get('https://temlin-portfolio.herokuapp.com/getuser/' + props.match.params.id);
        if(res.status == 200){
            setDetails(res?.data)
            setLoading(false)
        }
    }

    useEffect(()=>{
        _getUserDetails();
    },[])


    return <React.Fragment>
        {loading ? <div className={styles.loader}>
        <img src={loader} />
        </div> : <>
        <div className={styles.header}>
        <img className={styles.headerImage} src='https://www.constructionexec.com/assets/site_18/images/article/081219110833.jpg?width=1280' />
        <div className={styles.headerContent}>
            <h1>{details?.name}</h1>
            <div className={styles.occupations}>
                {details?.services.map(service => {
                    return <p>{service}</p>
                })}
            </div>
            <div className={styles.websiteName}>
                <img src={websitelogo} alt='website logo'/>
                <a href={`https://${details?.website}`}>{details?.website}</a>
            </div>
            <div className={styles.phone}>
            <img src={phonelogo}/>
            <p>{details?.phone}</p>
            </div>
            <div className={styles.email}>
            <img src={emaillogo}/>
            <p>{details?.email}</p>
            </div>
            <div className={styles.address}>
            <img src={locationlogo}/>
            <p>{details?.state}</p>
            </div>
            
            <div className={styles.line}></div>
            <div className={styles.headerCards}>
                <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between'}}>
                    <img src={briefcase} />
                    <div><h2>{details?.numberOfProjects}</h2>
                    <p>Projects</p></div>
                </div>
                <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between'}}>
                <img src={medal} />
                <div><h2>{details?.inBusinessSince ? `${new Date().getFullYear() - parseInt(details?.inBusinessSince)}+` : 'Not Specified'}</h2><p>Experience</p></div>
                </div>
                <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between'}}>
                <img src={people} />
                <div><h2>{details?.sizeOfFirm}</h2><p>People</p></div>
                </div>
            </div>
        </div>
        </div>
        <div className={styles.catalogue}>
            <h1>CATALOGUE</h1>
            <div className={styles.catalogueImages}>
                {details?.workExperience.map(exp => {
                    return <div className={`${styles.image} ${styles.lastImage}`}><img src={exp.MediaUrl} />
                    {/* <p className={styles.moreImages}>+3</p> */}
                    </div>
                })}
            </div>
        </div>
        <div className={styles.highlights}>
            <h1>HIGHLIGHTS</h1>
            <div className={styles.highlightsInner}>
                {details?.achievements.map(ach => {
                    return <div className={styles.highlight}><img src={starlogo}/>{ach}</div>
                })}
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
        </>}
        
      </React.Fragment>
}

export default Overview