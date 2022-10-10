import React from 'react'
import Formations from './Formations'
import Experiences from './Experiences'
import DataFormations from '../datas/Formations'
import DataExperiences from '../datas/Experiences'
import "./FormationsExperiences.css"


function FormationsExperiences() {
    return (
        <div className='formation-experience'>
            <Formations datas={DataFormations}/>
            <Experiences datas={DataExperiences}/>
        </div>
    )
}

export default FormationsExperiences
