import React, { useEffect } from 'react'
import { Reveal } from '../Reveal'
import transition from '../Transition'
import { motion } from "framer-motion"

function About() {
  return (
    <>
      
      <div className="px-[50px] py-[100px]">
        <Reveal>
          <div className="flex justify-center text-[75px] font-medium"> <span className="text-[#00FF8A] pr-[20px]">ABOUT</span> PAGE </div>
        </Reveal>
        <Reveal>
          <div className="flex justify-center">[ work in progress ]</div>
        </Reveal>
        <Reveal>
          <div className="mb-[50px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero ea, 
            suscipit fugit quis cupiditate ut facilis, beatae cum quidem quibusdam 
            necessitatibus aliquid, tempora natus odit itaque? Unde recusandae provident,
            ut perspiciatis sed consequatur asperiores illum non beatae consequuntur amet 
            voluptas dolorem nisi nihil repellendus eum expedita cum? Veniam error consequuntur 
            corrupti numquam earum. Quibusdam debitis facere, sit autem obcaecati ex porro quia laudantium 
            perspiciatis atque corporis officia temporibus blanditiis necessitatibus accusamus. A, accusamus. 
            Itaque magnam soluta earum velit minima veritatis corrupti eligendi laudantium omnis aperiam placeat cumque 
            saepe suscipit delectus, officia et. Soluta ab nobis sunt, adipisci est nihil reiciendis. Minus necessitatibus 
            cumque laudantium deleniti sapiente ex unde tempora reprehenderit non dignissimos hic dolorum sed, consequuntur 
            assumenda molestiae! Neque veniam ad tempora id ex in, repellat reiciendis laboriosam voluptates veritatis mollitia 
            quae eveniet quas, dignissimos itaque vel ipsum perferendis, modi perspiciatis? Reprehenderit reiciendis 
            quas illo fugiat assumenda repudiandae, praesentium iste harum, dolor beatae quasi? Officiis excepturi 
            eum numquam, nostrum nesciunt atque obcaecati maiores sit saepe officia iste voluptatem suscipit sapiente labore 
            quas nobis animi sunt. Reprehenderit, excepturi reiciendis odio magni quasi beatae. Cumque obcaecati eum quam. 
            Nobis, iste? Dolorum quam labore dolorem aliquam iure et incidunt deleniti dignissimos, delectus ullam.
          </div>
        </Reveal>
      </div>
    </>
  )
}

export default transition(About);
