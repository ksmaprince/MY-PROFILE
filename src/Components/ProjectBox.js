import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";
import GooglePlayButton from 'react-mobile-store-button'

const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    MMCalendarDesc: "A Calendar with Myanmar versus English Date. It can be calculated between Myanmar traditional date and English Date. Users can add notes, events, and memories to the note features. Utilized Kotlin, MVVM, Room, Firebase SDK, an ironSource SDK.",
    MMCalendarPlayStore: "https://play.google.com/store/apps/details?id=com.nanhm.mmcalendar",

    ENGMMDictionaryDesc: "An offline dictionary can be able to search the explanation of each English word in Myanmar language. It also provides word of the day; the user can memorize at least one English word randomly every day. Utilized Kotlin, MVVM, Room, Google Speech Recognition, Firebase SDK and ironSource SDK.",
    ENGMMDictionaryPlayStore: "https://play.google.com/store/apps/details?id=com.peteaung.engmmdictionary",

    DhammaDesc: "A religious app for Buddhists. It helps for those who are interested in reading the Dhamma Script and listening to audio from Buddhist Monks, Abidhama Teacher, Mediation Trainer, etc. Users can also read and listen offline by downloading eBooks, and MP3 Audios. Utilize Kotlin, MVVM, Room, Firebase SDK, and ironSource SDK.",
    DhammaPlayStore:"https://play.google.com/store/apps/details?id=com.haymarsan.dhammapiya",

    MMENGDictionaryDesc: "A dictionary app that allow user to search the translation of each Burmese word into English. It's useful for those who learn English vs Burmese Language. Utilized Kotlin, MVVM, Room, Google Speech Recognition, Firebase SDK and ironSource SDK.",
    MMENGDictionaryPlayStore: "https://play.google.com/store/apps/details?id=com.hms.myanmar_englishdictionarytranslator",

    MMThetponeDesc: "A Myanmar Spelling App for those who learning Myanmar Word. It can be searched and checked the Myanmar over 200 provided words. A spelling Quiz Game is provided to practice the correct spelling. Utilized Kotlin, MVVM, Room, Firebase SDK, and ironSource SDK.",
    MMThetponePlayStore: "https://play.google.com/store/apps/details?id=com.ottsolution.myanmarthatpone",

    MyHealthDesc: "An application provides the features: health information and knowledges, BMI Calculator, Due Date Calculator, and full descriptions of each result. Utilized Kotlin, MVVM, Room, Retrofit, Firebase SDK, and ironSource SDK.",
    MyHealthPlayStore: "https://play.google.com/store/apps/details?id=com.peteaung.myhealth"

  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            
            <div>
              <GooglePlayButton
                className={"custom-style"}
                store="android"
                url={desc[projectName+"PlayStore"]}
                linkProps={{ title: 'Android Store Button' }}/>
            </div>
        </div>
    </div>
  )
}

export default  ProjectBox