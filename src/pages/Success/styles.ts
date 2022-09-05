import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin: 6.75rem auto 0;
  padding: 5rem 1.5rem;

  max-width: 73rem;

  h1 {
    margin-bottom: 0.25rem;

    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.6rem;

    color: ${({ theme }) => theme['yellow-dark']};

    @media screen and (max-width: 62rem) {
      text-align: center;
    }
  }

  h1 + p {
    font-size: 1.25rem;
    line-height: 1.625rem;

    color: ${({ theme }) => theme['base-subtitle']};

    @media screen and (max-width: 62rem) {
      text-align: center;
    }
  }
`

export const SuccessContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.75rem;
  gap: 6.375rem;

  @media screen and (max-width: 69rem) {
    img {
      width: 40%;
    }
  }

  @media screen and (max-width: 62rem) {
    justify-content: center;

    img {
      display: none;
    }
  }
`

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  position: relative;
  flex: 1;

  max-width: 32rem;

  list-style: none;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 1px; /* control the border thickness */
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  @media screen and (max-width: 36rem) {
    max-width: auto;
  }
`

interface InfoProps {
  color: 'purple' | 'yellow' | 'yellow-dark'
}

export const Info = styled.li<InfoProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    padding: 0.5rem;

    background: ${({ theme, color }) => theme[color]};
    border-radius: 50%;

    line-height: 0;

    svg {
      color: ${({ theme }) => theme.white};
    }
  }

  p {
    line-height: 1.3rem;
    color: ${({ theme }) => theme['base-text']};
  }
`
