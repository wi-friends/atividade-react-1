import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled'

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;

  h1 {
    font-size: 3em;
  }

  h2 {
    color: #666;
  }

  li {
    list-style: none;
    color: #666;
    text-align: left;
    margin: 4px;
  }
`


const Home: NextPage = () => {
  return (
    <>
      <Container>
        <h1>Executando React com Next.JS</h1>
        <h2>Site criado em TypeScript publicado na Vercel.</h2>
        <ul>
          <li>Alexia</li>
          <li>Isabella</li>
          <li>Maysa</li>
          <li>Rose</li>
          <li>Sarah</li>
          <li>Tifane</li>
          <li>Vanessa</li>
        </ul>  
      </Container>
    </>
  )
}

export default Home
