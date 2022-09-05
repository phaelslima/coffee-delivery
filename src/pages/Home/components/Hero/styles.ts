import styled from 'styled-components'

export const HeroContainer = styled.header`
  display: flex;
  align-items: flex-start;
  padding: 5.75rem 0;
  gap: 3.5rem;

  img {
    animation: go-back 1s;

    @keyframes go-back {
      0% {
        transform: translateX(150px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  transition: all 0.2s linear;

  @media screen and (max-width: 62rem) {
    flex-direction: column;
    align-items: center;

    img {
      animation: none;
    }
  }

  @media screen and (max-width: 36rem) {
    padding: 4.25rem 0;
    gap: 2.5rem;

    img {
      width: 90%;
    }
  }
`

export const HeroContent = styled.div`
  animation: go-ahead 1s;

  @keyframes go-ahead {
    0% {
      transform: translateX(-150px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  h1 {
    margin-bottom: 1rem;

    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.9rem;

    color: ${({ theme }) => theme['base-title']};

    @media screen and (max-width: 62rem) {
      font-size: 2.8rem;

      text-align: center;

      animation: none;
    }

    @media screen and (max-width: 48rem) {
      font-size: 2.5rem;
      line-height: 3rem;
    }

    @media screen and (max-width: 36rem) {
      margin-bottom: 2rem;
      font-size: 2.2rem;
    }
  }

  h1 + p {
    margin-bottom: 4.125rem;

    font-size: 1.25rem;
    line-height: 1.25rem;

    color: ${({ theme }) => theme['base-subtitle']};

    @media screen and (max-width: 62rem) {
      text-align: center;
    }

    @media screen and (max-width: 36rem) {
      line-height: 1.5rem;
    }
  }

  @media screen and (max-width: 62rem) {
    order: 1;
    animation: none;
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

  @media screen and (max-width: 62rem) {
    justify-content: center;
  }

  @media screen and (max-width: 36rem) {
    column-gap: 1.5rem;
  }
`

interface HighlightProps {
  color: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const Highlight = styled.li<HighlightProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  line-height: 1.3rem;

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
