import React from 'react'
import Skill from "./Skill"
import Interests from "./Interests"
import "./Skills.css"

function Skills() {
    return (
    <div>
        <div className="skills">
            <h2 className="h2">Compétences</h2>
            <Skill title="HTML" rating="4"/>
            <Skill title="CSS" rating="3"/>
            <Skill title="JAVASCRIPT" rating="3"/>
            <Skill title="REDUX" rating="2"/>
            <Skill title="REACT" rating="4"/>
            <Skill title="NODE JS" rating="4"/>
            <Skill title="MYSQL" rating="3"/>
            <Skill title="GIT" rating="4"/>
            <Skill title="POSTMAN" rating="4"/>

        </div>
        <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Anglais" rating="4"/>
        </div>
        <Interests />
    </div>
    )
}

export default Skills
