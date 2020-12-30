import React from 'react'

import './TopDashboard.scss';


export default function TopDashBoard() {
    return (
        <>
            <div className='top'>
            <div className="top__card">
                    <div className="top__title">
                        Clientes
                    </div>
                    <div className="top__info">
                        30
                    </div>
                </div>

                <div className="top__card">
                    <div className="top__title">
                        Marcações
                    </div>
                    <div className="top__info">
                        30
                    </div>
                </div>

                <div className="top__card">
                    <div className="top__title">
                        Produtos em baixo stock
                    </div>
                    <div className="top__info">
                        30
                    </div>
                </div>

                <div className="top__card">
                    <div className="top__title">
                        Novas Mensagens
                    </div>
                    <div className="top__info">
                        30
                    </div>
                </div>
            </div>
        </>
    )
}
