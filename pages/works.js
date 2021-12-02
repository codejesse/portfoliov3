import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Text, Grid, Spacer, Card, Button } from "@nextui-org/react";
import Menu from "./Menu";

export default function works() {
  return (
    <>
      <Text className={styles.Nav} size={20}>
        {" "}
        <Link href="/" passHref>
          &larr;Back
        </Link>
      </Text>
      <title>Works</title>
      <div className={styles.works}>
        <h1 className="animate__animated animate__fadeInUp">Works</h1>
        <Grid.Container gap={2}>
          <Grid>
            <Card className="animate__animated animate__fadeInUp" width="330px">
              <Text h4>Newsit</Text>
              <Text>News web app made with Reactjs.</Text>
              <Card.Footer>
                <Link
                  color
                  target="_blank"
                  href="https://newsit.vercel.app/"
                  passHref
                >
                  Visit
                </Link>
                <Spacer x={1} />
                <Link
                  color
                  target="_blank"
                  href="https://github.com/codejesse/NewsifyV2"
                  passHref
                >
                  GitHub
                </Link>
              </Card.Footer>
            </Card>
            <Spacer y={1} />
            <Card className="animate__animated animate__fadeInUp" width="330px">
              <Text h4>ScreenTime</Text>
              <Text>Movie web application made with Reactjs.</Text>
              <Card.Footer>
                <Link
                  color
                  target="_blank"
                  href="https://screentime.vercel.app/"
                  passHref
                >
                  Visit
                </Link>
                <Spacer x={1} />
                <Link
                  color
                  target="_blank"
                  href="https://github.com/codejesse/ScreenTime-movie-app"
                  passHref
                >
                  GitHub
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid>
            <Card className="animate__animated animate__fadeInUp" width="330px">
              <Text h4>Kso Website</Text>
              <Text>Landing page made for a client.</Text>
              <Card.Footer>
                <Link target="_blank" href="https://kso.vercel.app/" passHref>
                  Visit
                </Link>
                <Spacer x={1} />
                <Link
                  target="_blank"
                  href="https://github.com/codejesse/Kso-website"
                  passHref
                >
                  GitHub
                </Link>
              </Card.Footer>
            </Card>
            <Spacer y={2} />
            <Link target="_blank" href="https://github.com/codejesse/" passHref>
              <Button>Github for more</Button>
            </Link>
          </Grid>
        </Grid.Container>
      </div>
    </>
  );
}
