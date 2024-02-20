import React from 'react'
import './artefacts.css'
import { card } from './artefacts'
import { Link } from 'react-router-dom'
const Artifacts = () => {
  return (
    <>
    <div className="content">
        <div className="container">
            <div className="content__cards">
               {card.map((card) => {
                return(
                    <Link>
                    <div className="card__card">
                        <div className="img__card">
                            <img src={card.url} alt="asd" />
                        </div>
                        <div className="content__card">
                            <h3 className='title__card'>{card.name}</h3>
                            <p className="text__card">{card.text}</p>
                            <button className='btn__card'>{card.btn}</button>
                        </div>
                    </div>
                    </Link>
                )
               })}
            </div>
               <div className="btn__perexod">
                    <button className="perexod">
                    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z" fill="#899D9D"/>
                    </svg>
                    </button>
                    <p className='text__perexod'>1 из 3</p>
                    <button className="perexod"><svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#899D9D"/>
                    </svg>
                    </button>
               </div>
        </div>
    </div>
    </>
  )
}

export default Artifacts