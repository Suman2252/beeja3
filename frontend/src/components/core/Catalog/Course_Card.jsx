import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import GetAvgRating from "../../../utils/avgRating"
import RatingStars from "../../common/RatingStars"
import Img from './../../common/Img';

function Course_Card({ course, Height }) {
  const [avgReviewCount, setAvgReviewCount] = useState(0)
  
  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews)
    setAvgReviewCount(count)
  }, [course])

  // Use backend data if available, otherwise calculate
  const avgRating = course?.averageRating || avgReviewCount || 0
  const totalRatings = course?.totalRatings || course?.ratingAndReviews?.length || 0

  return (
    <div className='hover:scale-[1.03] transition-all duration-200 z-50'>
      <Link to={`/courses/${course._id}`}>
        <div className="">
          <div className="rounded-lg">
            <Img
              src={course?.thumbnail}
              alt="course thumnail"
              className={`${Height} w-full rounded-xl object-cover`}
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className="text-xl theme-text-primary">{course?.courseName}</p>
            <p className="text-sm theme-text-secondary">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-5">{avgRating}</span>
              <RatingStars Review_Count={avgRating} />
              <span className="theme-text-secondary">
                {totalRatings} Ratings
              </span>
            </div>
            <div className="flex items-center gap-2">
              {course?.courseType === 'Free' ? (
                <p className="text-xl text-caribbeangreen-100">Free</p>
              ) : (
                <p className="text-xl theme-text-primary">Rs. {course?.price}</p>
              )}
              {course?.courseType === 'Free' && course?.originalPrice && (
                <span className="text-sm theme-text-secondary line-through">
                  Rs. {course?.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Course_Card
