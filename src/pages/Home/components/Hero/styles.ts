import styled from 'styled-components'

export const HeroContainer = styled.header`
  display: flex;
  align-items: flex-start;
  padding: 5.75rem 0;
  gap: 3.5rem;
`

export const HeroContent = styled.div`
  h1 {
    margin-bottom: 1rem;

    line-height: 3.9rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: ${({ theme }) => theme['base-title']};
  }

  h1 + p {
    margin-bottom: 4.125rem;

    line-height: 1.25rem;
    font-size: 1.25rem;
    font-weight: 400;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const HighlightList = styled.ul`
  display: grid;
  justify-content: flex-start;
  grid-template-columns: auto auto;
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  width: auto;

  list-style: none;
`

interface HighlightProps {
  color: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const Highlight = styled.li<HighlightProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  line-height: 1.3rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme['base-title']};

  span {
    display: flex;
    padding: 0.5rem;

    background: ${({ theme, color }) => theme[color]};
    border-radius: 50%;

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`
