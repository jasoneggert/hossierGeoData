type MainLayoutProps = {
  children?: React.ReactNode
}

import styled from 'styled-components'

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container>
      <NavBar>NavBar</NavBar>
      <Main>{children}</Main>
      <SideBar>
        <NavItem>One</NavItem>
        <NavItem>Two</NavItem>
        <NavItem>Three</NavItem>
      </SideBar>

      <Footer>Footer</Footer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.15fr 1.5fr 0.1fr;
  grid-template-areas:
    'nav nav nav nav nav'
    'sidebar main main main main'
    'sidebar footer footer footer footer';
  text-align: center;
  grid-gap: 0rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      'nav'
      'sidebar'
      'main'
      'content'
      'footer';
  }
  color: white;
`
const NavBar = styled.nav`
  background: #3a3a55;
  grid-area: nav;
  padding: 0.25rem;
`
const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`
const SideBar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
`
const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`
const NavItem = styled.div`
  width: 100%;
  height: 80px;
  padding: 0.25rem;
`

export default MainLayout

//if you want 3 content boxes over main, move the code below to new layout

/* <ContentBox>
        <Content1></Content1>
        <Content2>Content2</Content2>
        <Content3>Content3</Content3>
      </ContentBox> */

// const Content1 = styled.div`
//   background: #a6b8b9;
//   padding: 0.25rem;
//   width: 100%;
//   height: 100%;
// `
// const Content2 = styled(Content1)``
// const Content3 = styled(Content1)``

// const ContentBox = styled.div`
//   display: flex;
//   gap: 0.25rem;
//   padding: 0.25rem;
//   align-items: center;
//   grid-area: content;
//   justify-content: center;
//   @media (max-width: 550px) {
//     flex-direction: column;
//   }
// `
