import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/example.module.sass'

export default function Index() {
  return (
    <div>
      <img src="This PC/OS (C:)/Users/adhvi/Downloads/IMG_9113.jpeg" width="200px"></img>
      <h1 className={styles.class_name}>Example Class Property by SASS</h1>
    </div>
  )
}
