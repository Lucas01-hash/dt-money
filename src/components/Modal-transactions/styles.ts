import { darken, transparentize } from "polished"
import styled from "styled-components"

export const Container = styled.div`
  h2 {
    color: var(--text-title);
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;

    border: 1px solid #d7d7d7;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
  }

  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield; 
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    margin-top: 1.5rem;
    border: none;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

  }

`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface IRadioBoxProps {
  isActive: boolean
  activeColor: 'red' | 'green'
}


const colors = {
  red: '#E52E4d',
  green: '#33cc95'
}

export const RadioBox = styled.button<IRadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props)=> props.isActive ? transparentize(0.9, colors[props.activeColor]) : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title)
    }
`