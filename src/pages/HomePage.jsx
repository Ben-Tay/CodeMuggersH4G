import React from 'react'
import children from "../assets/images/children.jpeg"

const HomePage = ({isHomePage}) => {
  return (
    <div className="container mx-auto">
        <section className="h-500 mt-20">
            <article/>

            <aside>
                <img className="h-500" src={children} alt="children pic"></img>
            </aside>

        </section>
    </div>
  )
}

export default HomePage