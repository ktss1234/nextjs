import React from 'react'

type Props = {
  params: { id: String }
}

export default function Product({ params }: Props) {
  return (
    <div>Product : {params.id}</div>
  )
}