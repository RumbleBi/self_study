import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import LayoutHeaderContainer from "./components/commons/layout/header/LayoutHeader.container";
import LayoutSidebarContainer from "./components/commons/layout/sidebar/LayoutSidebar.container";
import GlobalStyle from "./components/commons/styles/globalStyles";
import MainContainer from "./components/units/main/Main.container";

const LayoutBody = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <LayoutHeaderContainer />
        <LayoutBody>
          <LayoutSidebarContainer />
          <Routes>
            <Route path='/' element={<MainContainer />}></Route>
          </Routes>
        </LayoutBody>
      </BrowserRouter>
    </>
  );
}

export default App;
