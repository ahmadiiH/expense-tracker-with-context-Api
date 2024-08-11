import { useContext } from 'react'
import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transactionn from './Transactionn'

const Transaction = () => {
    const { transactions } = useContext(GlobalContext)


    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transactionn key = {transaction.id} transaction= { transaction }/>))}

            </ul>
        </>
    )
}

export default Transaction
