import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Paper
} from '@material-ui/core'

import { Query } from 'react-apollo'

import CommentBox from './comment-box'

import { getGreetingsQuery } from 'graphql/queries'

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  container: {
    backgroundColor: '#E0E0E0',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    height: '100vh'
  }
})

const Home = ({
  classes
}) => (
  <Grid container>
    <Grid item xs={12}>
      <Paper className={classes.container}>
        <Query query={getGreetingsQuery}>
          {
            ({ data }) => {
              // need to validate more
              if (data.allGreetings) {
                const { edges = [] } = data.allGreetings

                return edges.map(({ node }, index) => {
                  const { greeting } = node

                  return <CommentBox key={index}
                    title={greeting}
                    body='here goes the body'
                    city='New York'
                    hour='3H'
                  />
                })
              } else {
                // need to validite against network
                return 'loading'
              }
            }
          }
        </Query>
      </Paper>
    </Grid>
  </Grid>
)

Home.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Home)
