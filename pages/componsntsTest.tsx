import styles from "../styles/Home.module.scss"
import TagCategory from "../components/TagCategory"
import ImageCard from "../components/ImageCard"
import { Grid, Spacer } from "@nextui-org/react"
export default function componsntsTest() {
  return (
    <div className={styles.container}>
      <TagCategory />
      <Grid.Container gap={0.5} justify="space-around">
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
      </Grid.Container>
      <Spacer y={4} />
      <Grid.Container gap={1} justify="space-around">
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
        <Grid>
          <ImageCard />
        </Grid>
      </Grid.Container>
    </div>
  )
}
