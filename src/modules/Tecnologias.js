import React from 'react'
import css from "../assets/logos/css.png"
import html from "../assets/logos/html.png"
import javascript from "../assets/logos/javascript.png"
import mongo from "../assets/logos/mongo.png"
import next from "../assets/logos/next.png"
import node from "../assets/logos/node.png"
import postgre from "../assets/logos/postgre.png"
import react from "../assets/logos/react.png"
import sass from "../assets/logos/sass.png"
import typescript from "../assets/logos/typescript.png"
const Tecnologias = () => {
  return (
    <div className='tecnologias'>
        <h1>O que eu sei</h1>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Node</li>
            <li>React</li>
            <li>Sass</li>
            <li>Next</li>
            <li>Mongo DB</li>
            <li>Postgre</li>
            <li>Typescript</li>
            <li>...</li>
            <div className='tecnologias__logos'>
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={javascript} alt="javascript" />
            <img src={node} alt="node" />
            <img src={react} alt="react" />
            <img src={sass} alt="sass" />
            <img src={next} alt="next" />
            <img src={mongo} alt="mongo" />
            <img src={postgre} alt="postgre" />
            <img src={typescript} alt="typescript" />
            </div>
        </ul>
    </div>
  )
}

 export default Tecnologias
