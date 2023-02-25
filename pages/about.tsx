import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Button } from "@mui/material";


export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>About Page</h1>
        <p className={styles.description}>
        <Button variant="contained">Contained</Button>
          <Link href="/">&larr; Go Back</Link>
        </p>
      </main>
    </div>
  )
}
