import React from 'react'
import { notFound } from 'next/navigation'
export default function ReviewsIdPage({params}) {
    if(params < 1000){
        notFound()
    }
  return (
    <div>Reviews Id Page</div>
  )
}
