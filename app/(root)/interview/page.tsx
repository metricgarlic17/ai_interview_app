import Agent from '@/components/agent'
import React from 'react'

const Page = () => {
  return (
    <div>
        <h3>Interview Generation</h3>

        <Agent userName="You" userId = 'user1' type="generate"></Agent>
    </div>
  )
}

export default Page