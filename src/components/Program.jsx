import React from 'react'
import { GiImperialCrown } from 'react-icons/gi'
import SectionHead from './SectionHead'
import {programs} from '../UI/data'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from "react-icons/ai"

const Program = () => {
  return (
    <section className="programs">
        <div className='container programs__container'>
           <SectionHead icon={<GiImperialCrown />} title="Programs"/>
        </div>
        <div className='programs__wrapper'>
            {
                programs.map(({id, icon, title, info, path})  => {
                    return (
                        <Card className="programs__program" key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path} className="btn sm">Learn More <AiFillCaretRight/></Link>
                        </Card>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Program