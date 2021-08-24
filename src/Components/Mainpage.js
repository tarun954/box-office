import React from 'react'
import Navs from './Navs'
import Title from './Title'

const Mainpage = ({children}) => {
    return (
        <div>
            <Title title="Box Office" Subtitle="Are you looking for an actor" />
            <Navs />
            {children}
        </div>
    )
}

export default Mainpage
