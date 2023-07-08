import './App.css';
import Navbar from './components/navbar';
import ReviewSidebar from './components/sidebar';
import AddMovieReview from './components/form';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ReviewSidebar/>
      <AddMovieReview onSubmit = {postReview}/>
    </div>
  );
}

const nextId = 0;

function postReview(newReviewData){
  const postedReview = {id: nextId++, ...newReviewData};
}

export default App;
