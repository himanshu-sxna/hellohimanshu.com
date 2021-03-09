import Head from 'next/head'
import Wrapper from "../components/Wrapper"
import IntroSection from "../components/Intro"
import ProjectSection from "../components/Projects"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
    <Wrapper>
      <Head>
        <title>Himanshu | Full Stack Web Developer</title>
      </Head>
      <IntroSection/>
      <ProjectSection/>
      <Footer/>
    </Wrapper>
    </>
  )
}
