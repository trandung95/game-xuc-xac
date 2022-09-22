import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

export default function PickArea() {
    const gameXucXac = useSelector(state => state.GameXucXac);
    // useEffect(() => {
    //     console.log(gameXucXac)
    // }, [])
    const dispatch = useDispatch();
    const renderDice = () => {
        return gameXucXac.dice.map((item, index) => {
            return <img key={index} className='imgXucXac mx-auto' src={item.url} alt={item.value} />
        })
    }
    const renderResultDice = () => {
        let diceResult = 0;
        for (let i of gameXucXac.dice) {
            // console.log('i.value', i.value);
            diceResult = diceResult + i.value;
            // console.log("diceResult", diceResult)
        }
        if (diceResult >= 11) {
            return <span className='result flex justify-center align-center text-2xl text-blue-500'>Tài - {diceResult}</span>
        }
        return <span className='result flex justify-center align-center text-2xl text-red-500'>Xỉu - {diceResult}</span>
    }
    const playerChoose = (choose) => {
        const action = {
            type: "PLAYER_CHOOSE",
            choose
        }
        dispatch(action);
    }
    return (
        <div className='grid grid-cols-3 gap-4 mt-15 mb-15'>
            <div className='flex justify-center py-16'>
                <button className='button bg-blue-500 text-white text-2xl font-bold text-4xl rounded-lg py-3 px-10' onClick={() => { playerChoose(true) }}>Chọn tài</button>
            </div>
            <div>
                <div className="grid grid-cols-3 flex space-x-4">
                    {/* <img className='imgXucXac mx-auto' src="./gameXucXac/1.png" alt="..." /> */}
                    {/* <img className='imgXucXac mx-auto' src="./gameXucXac/1.png" alt="..." /> */}
                    {/* <img className='imgXucXac mx-auto' src="./gameXucXac/1.png" alt="..." /> */}
                    {renderDice()}
                </div>
                <div className='py-8'>
                    {/* <span className='flex justify-center align-center text-lg'>diem xuc xac o day</span> */}
                    {renderResultDice()}
                </div>
            </div>
            <div className='flex justify-center py-16'>
                <button className='button bg-red-500 text-white text-2xl font-bold text-4xl rounded-lg py-3 px-10' onClick={() => { playerChoose(false) }}>Chọn xỉu</button>
            </div>
        </div>
    )
}
