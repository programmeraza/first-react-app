import React from 'react'
import './fill.css'

const Fill = () => {
  return (
        <>
        <div className="fill">
            <div className="container">
                <div className="fill__wrapper">
                    <div className="fill__column">
                        <h2 className='fill__title'>Помочь проекту</h2>
                        <p className="fill__text">Равным образом, экономическая повестка сегодняшнего дня не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Как принято считать, элементы политического процесса рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. </p>
                        <div className="fill__inp">
                            <input className='inp__name' type="name" name='Имя' placeholder='Имя' />
                            <input className='inp__name' type="email" name='Email' placeholder='Email'/>
                            <input className='inp__btn' type="button" value="Отправить" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Fill