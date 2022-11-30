import React from 'react'
import * as MdIcon from 'react-icons/md'
import * as BiIcon from 'react-icons/bi'
import Button  from 'react-bootstrap/Button'
import Div from 'react-bootstrap/Container'

function SupprEditBtn() {
  return (
    <Div className='ml-auto p-0'>
      <Button className='btn-delete m-1 justify-content-start x' ><MdIcon.MdOutlineDelete /></Button>
      <Button className='bg-info btn-edit m-1 justify-content-start x' ><BiIcon.BiEdit /></Button>
    </Div>
  )
}

export default SupprEditBtn
