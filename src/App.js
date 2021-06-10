import Container from './components/Container'
import Content from './components/Content'
import SideNav from './components/SideNav'
import useFetchData from './hooks/useFetchData'
import Pagination from './components/Pagination'
import Iframe from './components/Iframe'
import { useState } from 'react'



function App() {
  let newsData = useFetchData();
  const [maxPost, setMaxPost] = useState(6);
  const [toggle, setToggle] = useState('list');
  const [iframeLink, setIframeLink] = useState('');
  return (
    <div className="App">
      <Container>
        <SideNav toggle={[toggle, setToggle]} />
        <Content newsData={newsData} currentPost={[maxPost, setMaxPost]} toggle={toggle} setIframe={setIframeLink} />
        <Pagination postCount={newsData.length} currentPost={[maxPost, setMaxPost]} />
        {iframeLink.length > 1 ? <Iframe link={[iframeLink, setIframeLink]} /> : null}
      </Container>
    </div>
  );
}

export default App;
