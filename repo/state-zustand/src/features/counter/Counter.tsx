import React, { useState } from 'react';
import styles from './Counter.module.css';
import { useStore } from './counterStore';

export function Counter() {
  const { count, incAmount, inc, dec, setIncAmount, incByAmount, incAsync, incIfOdd } = useStore()

  return (
    <>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={dec}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={inc}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incAmount}
          onChange={(e) => setIncAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={incByAmount}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={incAsync}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={incIfOdd}
        >
          Add If Odd
        </button>
      </div>
    </>
  );
}
