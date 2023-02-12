import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'services/TMDBApi';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      const fullReviews = await getMovieReview(id);
      const mainReviews = fullReviews.slice(0, 10);
      setReviews(mainReviews);
    };
    getReviews();
  }, [id]);

  return (
    reviews.length > 0 ? 
    <ReviewsList>
      {reviews.map(review => (
        <li key={review.id}>
          <h2>{review.author}</h2>
          <p>{review.content}</p>
        </li>
      ))}
    </ReviewsList> :
    <h3>No reviews yet</h3>
  
    
  );
};

export default Reviews;
