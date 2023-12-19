import React, { useState } from 'react'

const RatingFilter = ({ onChange }) => {
    const [selectedRatings, setSelectedRatings] = useState([]);

    const handleCheckboxChange = (rating) => {
        const newSelectedRatings = selectedRatings.includes(rating)
            ? selectedRatings.filter((selected) => selected !== rating)
            : [...selectedRatings, rating];

        setSelectedRatings(newSelectedRatings);
        onChange(newSelectedRatings);
    };

    return (
        <div className='product-filter-container'>
            <h5 className='product-filter-title'>Customer Ratings</h5>
            <label>
                <input
                    type="checkbox"
                    checked={selectedRatings.includes(3)}
                    onChange={() => handleCheckboxChange(3)}
                />
                Above 3
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={selectedRatings.includes(4)}
                    onChange={() => handleCheckboxChange(4)}
                />
                Above 4
            </label>
        </div>
    )
}

export default RatingFilter