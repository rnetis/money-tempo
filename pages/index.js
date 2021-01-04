import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid
} from '@material-ui/core'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Money Tempo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Money Tempo</h1>
        <h3>This Project Made to Analysis CryptoCurrency</h3>
        <h3>Every Day this project using A.I. and Indicators</h3>
        <h3>Finds the best singlas of market and on that signal we're</h3>
        <h3>Risk Management And your prfit of each signals is between 5-8%</h3>

        <Grid container spacing={3}>
          <Grid item>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Money Tempo
                </Typography>
                <Typography variant="h5" component="h2">
                  One Week
                </Typography>
                <Typography variant="body2" component="p">
                  For Using this plan
                  <br />
                  You Have to install
                  <br />
                  {'"Slack"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' href='https://idpay.ir/money-tempo' size="small">50,000 TMN</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Money Tempo
                </Typography>
                <Typography variant="h5" component="h2">
                  One Month
                </Typography>
                <Typography variant="body2" component="p">
                  For Using this plan
                  <br />
                  You Have to install
                  <br />
                  {'"Slack"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' href='https://idpay.ir/money-tempo' size="small">150,000 TMN</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Money Tempo
                </Typography>
                <Typography variant="h5" component="h2">
                  Three Month
                </Typography>
                <Typography variant="body2" component="p">
                  For Using this plan
                  <br />
                  You Have to install
                  <br />
                  {'"Slack"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' href='https://idpay.ir/money-tempo' size="small">400,000 TMN</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made By <a href='https://instagram.com/rynchaos' >@rynchaos</a>
        </a>
      </footer>
    </div>
  )
}
