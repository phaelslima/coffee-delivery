import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin: 6.75rem auto 0;
  padding: 0 1.5rem;

  max-width: 73rem;
`

export const CoffeeListContainer = styled.section`
  padding: 2rem 0;

  h2 {
    margin-bottom: 3.375rem;

    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.6rem;

    @media screen and (max-width: 48rem) {
      font-size: 1.75rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 1.5rem;
    }
  }
`

export const CoffeeListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media screen and (max-width: 69rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 48rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 36rem) {
    grid-template-columns: 1fr;
  }
`
