import { useState } from 'react'
import { fetchCount } from './counterAPI'

export const useStore = () => {
    // Declare state object
    const [store, setStore] = useState({
      count: 0,
      incAmount: 2
    })

    // Declare function
    const inc = () => setStore(store => ({...store, count: store.count + 1}))
    const dec = () => setStore(store => ({...store, count: store.count - 1}))
    const setIncAmount = (val: number) => setStore(store => ({...store, incAmount: Number(val)}))
    const incByAmount = () => setStore(store => ({...store, count: store.count + store.incAmount}))
    const incIfOdd = () => {
      if (store.count % 2 === 1) {
        setStore(store => ({...store, count: store.count + store.incAmount}))
      }
    }

    const incAsync = async () => {
      const response = await fetchCount(store.incAmount)
      let newIncAmount = Number(response.data)
      console.log(newIncAmount)
      setStore(store => ({
        ...store,
        count: store.count + newIncAmount,
        incAmount: newIncAmount
      }))
    }

    // Return store object
    return {
      store,
      setStore,
      inc,
      dec,
      setIncAmount,
      incByAmount,
      incIfOdd,
      incAsync
    }
}
