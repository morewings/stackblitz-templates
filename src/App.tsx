import classes from './App.module.css';
import { Carousel } from './Carousel';
import { createCarouselImages } from './Carousel/createCarouselImages.tsx';

const App = () => {
  return (
    <div className={classes.app}>
      <Carousel width={666} height={333}>
        {createCarouselImages({ amount: 12, width: 666, height: 333 })}
      </Carousel>
    </div>
  );
};

export default App;
