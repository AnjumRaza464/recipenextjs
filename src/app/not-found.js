import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <>
    <div>This page is not NotFound</div>
    <p><Link href={'/'}>Go to Home</Link></p>
    </>
  )
}

export default NotFound