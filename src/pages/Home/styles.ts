import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin: 0 auto;
  padding: 0 1.5rem;

  max-width: 73rem;
`

export const CoffeeListContainer = styled.section`
  padding: 2rem 0;

  h2 {
    margin-bottom: 3.375rem;

    line-height: 2.6rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }
`

export const CoffeeListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`
