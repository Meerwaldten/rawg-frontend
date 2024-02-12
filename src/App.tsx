import { useState } from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`  
          }}
      >
        <GridItem bg='orange.300' area={'nav'}>
          Nav
        </GridItem>
        <Show above="lg">
        <GridItem bg='pink.300' area={'aside'}>
          Aside
        </GridItem>
        </Show>
        <GridItem bg='green.300' area={'main'}>
          Main
        </GridItem>
      </Grid>
    </div>
  )
}

export default App