import './App.css';
import './../routes/images'
import IMAGES from './../routes/images';

function App() {
    return (
      <div>
        <ImagesPage className="images">
        {IMAGES.map(img => (
          render()
        ))}
      </ImagesPage>
      </div>
    );
  }
  
  class imageItem {
    render() {
        const isMobile = window.screen.width < 750;
        return (
          <div>
            {isMobile
              ? <ImageItem image={img.main_attachment.small}/>
              : <ImageItem image={img.main_attachment.big}/>
            }
          </div>
        );
      }
  }

  export default App;
  