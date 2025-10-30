import HomePage from './pages/HomePage'
import SignUpButton from './components/SwipeLettersButton'
import CMSCarousel from './pages/CMSCarousel'
import PaperTransition from './components/PaperTransition';
function App() {
  const mockData = [
    { title: "Course 1" },
    { title: "Course 2" },
    { title: "Course 3" },
  ];

  return (
    <>
    <HomePage/>
    <SignUpButton/>
    <div style={{ width: 200, height: 300, margin: "50px auto" }}>
      <PaperTransition
        image1={{ src: "https://picsum.photos/200/300?grayscale" }}
        image2={{ src: "https://picsum.photos/200/300" }}
        springDuration={1.5}
        bounce={0.3}
        enableClickSpin={true}
      />
    </div>
    </>
  )
}

export default App
