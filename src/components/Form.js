import styles from "./Form.module.css"
import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import moment from "moment";
import Header from "./Header";
import { Link } from "react-router-dom";


function Form(props) {
    const [firstPage, setFirstPage] = useState(true)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [numberProjects, setNumberProjects] = useState()
    const [firmSize, setFirmSize] = useState()
    const [email, setEmail] = useState('')
    const [service, setService] = useState('')
    const [services, setServices] = useState([]);
    const [achievement, setAchievement] = useState('')
    const [achievements, setAchievements] = useState([]);
    const [selectedState, setSelectedState]= useState('')
    const [selectedYear, setSelectedYear] = useState('')
    const [websiteUrl, setWebsiteUrl] = useState('')
    const [description, setDescription]= useState('');
    const [temlinUsing, setTemlinUsing] = useState('')
    const [isMessage, setIsMessage] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    const [experience, setExperience] = useState([])
    const [images, setImages] = useState([]);
    const history = useHistory();
    const [ MediaArr, setMediaArr ] = useState([]);
    


    const states = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"];
      
    const years = [2021,2020,2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000];          

    let backHandler = (e) => {
        e.preventDefault()
        setFirstPage(true)
    }
    let nextHandler = (e) => {
        e.preventDefault()
        if(name === '' || email === '' || phone == ''){
            console.log('Please mark all required fields!');
            console.log(MediaArr);
            setIsMessage(true)
        } else {
            
            setFirstPage(false)
            setIsMessage(false)

           
        }
    }

    let numberProjectsHandler = (e) => {
        setNumberProjects(e.target.value);
    }

    let firmSizeHandler = (e) => {
        setFirmSize(e.target.value);
    }

    let temlinUsingHandler = (e) => {
        setTemlinUsing(e.target.value)
    }

    let submitHandler = async (e)=> {
        e.preventDefault()
        let data = {
            name: name,
            state: selectedState,
            phone: phone,
            inBusinessSince: selectedYear,
            numberOfProjects: numberProjects,
            sizeOfFirm: firmSize,
            email: email,
            services: services,
            achievements: achievements,
            website: websiteUrl,
            description: description,
            usingTemlim: temlinUsing,
            workExperience: MediaArr
        }
        let res = await axios.post('https://temlin-portfolio.herokuapp.com/adduser',data);
        if(res.status == 200){
            setSuccessMessage(true)
            history.push(`/${res?.data._id}/${res?.data.name}`)
        }
        }


        const upload = () => {
            Array.from(images).map(image => {
                const data = new FormData()
                data.append("file", image)
                data.append("upload_preset", process.env.REACT_APP_upload_preset)
                data.append("api_key", process.env.REACT_APP_API_KEY);
                data.append("cloud_name",process.env.REACT_APP_cloud_name);
                data.append("cloud_name",process.env.REACT_APP_cloud_name);
    
                fetch("https://api.cloudinary.com/v1_1/dlzo8dt7m/image/upload",{method:"post",
                body: data
                })
                .then(resp => resp.json())
                .then(data => {
                  const media = {
                      mediaID: data.asset_id,
                      MediaUrl: data.secure_url,
                      mediaType: data?.format,
                      MediaSize: data.bytes,
                      Date : moment().format('DD-MM-YYYY')
                  }
                  if(media.MediaUrl == undefined ) return
                setMediaArr((n) => [...n,media])
                })
                .catch(err => console.log(err))
            })
                
            }

        useEffect(()=>{
            upload()
         },[images])

    return <React.Fragment>
        <Header/>
      <form>
        <div className={styles.progress}>
            <div style={{width:firstPage ? '50%' : '100%'}} className={styles.progressBar}></div>
            <div className={styles.first}>1</div>
            <div style={{backgroundColor: firstPage ? 'rgb(215, 215, 215)' : '#5CBD9D'}} className={styles.second}>2</div>    
        </div>
        
        {firstPage && <div>
            <div className={styles.formGroup}>
            <label>Name <span className={styles.requiredStar}>*</span></label>
            <input value={name} onChange={(e)=>setName(e.target.value)} id="name" type='text'/>
           </div>
        <div className={styles.formGroup}>
            <label>State</label>
            <select onChange={(e)=>setSelectedState(e.target.value)}>
            <option value="">Select State</option>
              {states.sort().map(state => {
                  return <option key={state}>{state}</option>
              })}
            </select>
        </div>
        <div className={styles.formGroup}>
            <label>Phone <span className={styles.requiredStar}>*</span></label>
            <input value={phone} maxLength='10' onChange={(e)=>setPhone(e.target.value)} type='tel'/>
        </div>
        <div className={styles.formGroup}>
            <label>In Business Since</label>
            <select onChange={(e)=>setSelectedYear(e.target.value)}>
               <option value=''>Select Year</option>
               {years.map(year => {
                   return <option key={year}>{year}</option>
               })}
            </select>
        </div>
        <div className={styles.formGroup}>
            <label>Number of projects done</label>
            <div className={styles.radio}>

                <div className={styles.checkbox}>
                <input onChange={numberProjectsHandler} value='0-10' type='radio' name='numberProjects'/>
                <label>0-10</label><br/>
                </div>
                

               <div className={styles.checkbox}>
               <input onChange={numberProjectsHandler} value='11-20' type='radio' name='numberProjects'/>
                <label>11-20</label><br/>
               </div>
                

                <div className={styles.checkbox}>
                <input onChange={numberProjectsHandler} value='Above 20' type='radio' name='numberProjects'/>
                <label>Above 20</label>
                </div>
               
            </div>
        </div>
        <div className={styles.formGroup}>
            <label>Size of the firm</label>
            <div className={styles.radio}>
               
               <div className={styles.checkbox}>
               <input onChange={firmSizeHandler} value='0-20' type='radio' name='size'/>
                <label>0-20 people</label><br/>
               </div>
                
                <div className={styles.checkbox}>
                <input onChange={firmSizeHandler} value='21-50' type='radio' name='size'/>
                <label>21-50 people</label><br/>
                </div>

                

                <div className={styles.checkbox}>
                <input onChange={firmSizeHandler} value='51-100' type='radio' name='size'/>
                <label>51-100 people</label><br/>
                </div>
                
                <div className={styles.checkbox}>
                <input onChange={firmSizeHandler} value='Above 100' type='radio' name='size'/>
                <label>Above 100</label><br/>
                </div>
            </div>
        </div>
        <div className={styles.formGroup}>
        <label>Email <span className={styles.requiredStar}>*</span></label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' />
        </div>
        <div className={styles.formGroup}>
            <label for='files'>Work Experience</label>
            <div style={{position:'relative'}}>
            <input multiple style={{opacity:'0',zIndex:'999'}} id='files' onChange={(e)=> {
                setImages(e.target.files)
            }} type='file' />
            <div className={styles.uploadIcon}><i className="fas fa-file-upload fa-10x"></i>
            <p>Drap and drop here to upload files!</p></div>
            </div>
            
        </div>
        <div className={styles.expImages}>
            {MediaArr.map(i => {
                        return <img src={i.MediaUrl}/>
            })}
        </div>
        <div className={styles.formGroup}>
            <label>Your Services</label>
          
           <div>
           <input className={styles.services} style={{width:'70%'}} value={service} onChange={(e)=>setService(e.target.value)} type='text'/>
            
          
            <button onClick={(e)=>{
                e.preventDefault()
                if(service !== ''){
                    setServices((n)=>[...n,service])
                }
               setService('')
            }} className={styles.addService}>Add Service</button>
             <div className={styles.serviceList}>
            {services.map((i,index) => {
                return <h2 key={index}>{index+1}. {i}</h2>
            })}
        </div>
           </div>
        
        </div>
           {isMessage && <div className={styles.message}>
           <p>Please fill in all the required fields before proceeding to the next page!</p>
           </div>}
        <div>
            <button onClick={nextHandler} className={styles.nextBtn}>Next</button>
        </div>
        </div> }

       
        
        {!firstPage && <div>
            <div className={styles.formGroup}>
            <label>Key Achievements</label>
           <div>
           <input onChange={(e)=>setAchievement(e.target.value)} id="keyach" value={achievement} type='text'/>
            <button onClick={(e)=>{
                e.preventDefault()
                if(achievement !== ''){
                    setAchievements((n)=>[...n,achievement])
                }
               setAchievement('')
            }} className={styles.addService}>Add Achievement</button>
            <div className={styles.serviceList}>
            {achievements.map((i,index) => {
                return <h2 key={index}>{index+1}. {i}</h2>
            })}
        </div>
           </div>
        </div>
        
        
        <div className={styles.formGroup}>
            <label>Company Website</label>
            <input onChange={(e)=>setWebsiteUrl(e.target.value)} type='text'/>
        </div>
        
        <div className={styles.formGroup}>
            <label>About the Company</label>
            <input onChange={(e)=>setDescription(e.target.value)} type='text'/>
        </div>
        <div className={styles.formGroup}>
            <label>Are you using Temlin for your Project?</label>
            <div className={styles.radio}>

               <div className={styles.checkbox}>
               <input onChange={temlinUsingHandler} type='radio' value={true} name='usingOrNot'/>
                <label>Yes</label><br/>
               </div>
                <div className={styles.checkbox}>
                <input onChange={temlinUsingHandler} value={false} type='radio' name='usingOrNot'/>
                <label>No</label><br/>
                </div>
            </div>
        </div>
        {successMessage && <div className={styles.successMessage}>
            <p>Your data has been saved successfully!</p>
        </div>}
        <div style={{display:'flex',alignItems:'center'}}>
            <button onClick={backHandler} className={styles.backBtn}>Back</button>
            <button onClick={submitHandler} className={styles.submitBtn}>Submit</button>
        </div>
        
        </div>}
   </form>
   </React.Fragment> 
}

export default Form