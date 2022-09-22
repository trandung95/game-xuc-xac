import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ResultArea() {
    const dispatch = useDispatch();
    const resultValue = useSelector(state => state.GameXucXac);
    console.log("resultValue", resultValue)
    const startGame = () => {
        const action = {
            type: "START_GAME"
        }
        dispatch(action);
    }
    const playerPick = () => {
        if (resultValue.playerPick === true) {
            return <span className='resultValue text-blue-500'>Tài</span>
        } else {
            return <span className='resultValue text-red-500'>Xỉu</span>
        }
    }
    const anou = () => {
        if (resultValue.result.lose === false) {
            return <span className='text-green-500'>Thắng</span>
        } else if (resultValue.result.lose === true) {
            return <span className='text-red-500'>Thua</span>
        }
    }
    return (
        <div>
            <div className="grid grid-rows-5 gap-4 text-center text-4xl">
                <div>Bạn chọn: {playerPick()}</div>
                <div>Lượt này bạn:{anou()}</div>
                <div>Số lần thắng: <span className='resultValue'>{resultValue.result.win}</span> </div>
                <div>Tổng số lần chơi: <span className='resultValue'>{resultValue.result.totalGame}</span></div>
                <div className='flex justify-center mb-3'>
                    <button className='button bg-red-500 text-white text-2xl font-bold text-4xl rounded-lg py-3 px-10' onClick={startGame}>Start</button>
                </div>
            </div>
        </div>
    )
}