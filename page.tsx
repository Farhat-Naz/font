import React from 'react'
import { Caveat } from 'next/font/google';

const caveat= Caveat ({subsets:[ "latin"]})


function Home() {
  return (
    <div>
      <h1 className={`$ Caveat text-blue-300`}>Hello World</h1>
    </div>
  )
}

export default Home
