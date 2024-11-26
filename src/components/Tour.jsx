import { useState } from "react";

export default function Tour({ id, image, info, name, price, deleteTour }) {
    const [showMore, setShowMore] = useState(false);

    return (<article className="single-tour">
        <img className="img" src={image} alt={name} />
        <span className="tour-price">${price}</span>
        <div className="tour-info">
            <h5>{name}</h5>
            <p>{showMore ? info : info.substring(0, 200)}
                <button className="info-btn" onClick={() => { setShowMore(!showMore) }}>
                    {showMore ? "Read Less" : "Read More..."}
                </button>
            </p>
            <button className="btn delete-btn btn-block"
                onClick={() => { deleteTour(id) }}
            >
                Not Interested
            </button>
        </div>
    </article>);
}