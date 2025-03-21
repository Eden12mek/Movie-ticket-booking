import React from "react";
import { MovieCardType } from "@/types/types";
import { useRouter } from "next/navigation";
import { RxStarFilled } from "react-icons/rx";
import './Cards.css'

const MovieCards = (data: MovieCardType) => {
  const router = useRouter();

  const { _id, title, imageUrl, rating, type } = data;
  return (
    <div
      className="moviecard"
      onClick={() => {
        router.push(`/pages/Bahirdar/movies/${title}`);
      }}
    >
      <div
        className="movieimg"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <p className="rating">
          <RxStarFilled className="star" />
          &nbsp;&nbsp;
          {rating}/10
        </p>
      </div>
      <div className='details'>
                <p className='title'>
                    {title}
                </p>
                <p className='type'>
                    {type}
                </p>
            </div>
    </div>
  );
};

export default MovieCards;
