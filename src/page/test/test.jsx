import React from 'react'
import './test.css'
export default function Test() {
  return (
    <div className='container-fluid'>
        <div className="headera d-flex">
            <div className="headers border " style={{width:'350px'}}>
                <div className="border h-100" style={{width:'250px'}}></div>
                <button>aaa</button>
            </div>
            <div className="headerc border" style={{width:'100%'}}>headerc</div>

        </div>
        <div className="d-flex">
            <div className="contents" style={{width:'350px'}}>contents</div>
            <div className="contentc" style={{width:'100%'}}>contentc</div>
        </div>
    </div>
  )
}
