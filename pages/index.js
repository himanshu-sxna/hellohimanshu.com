import Head from 'next/head'
import Wrapper from "../components/Wrapper"
import IntroSection from "../components/Intro"

export default function Home() {
  return (
    <>
    <Wrapper>
      <Head>
        <title>Himanshu|Web Developer</title>
      </Head>
      <IntroSection/>
    </Wrapper>
    </>
  )
}
