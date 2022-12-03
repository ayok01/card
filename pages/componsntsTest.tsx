import Head from "next/head"
import styles from "../styles/Home.module.scss"
import TagCategory from "../components/TagCategory"

export default function componsntsTest() {
  return (
    <div className={styles.container}>
      <TagCategory />
    </div>
  )
}
