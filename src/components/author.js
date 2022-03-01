import React from 'react'
import AuthorImg from '../../static/author/dummy-profile.jpg';
import DummyAuthor from "../../static/author/dummy-profile.jpg";
import { Link } from 'gatsby'

const Author = () => {
    return (
        <>
            <section className="upper-main-author" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                            After a stint in the marine corps, Louis De Martinis finished his education, obtaining a master's degree from SUNY. Retiring from the NYPD as a detective lieutenant, he went on to the Department of Justice and then worked for President Reagan's Organized Crime Commission as the deputy director of investigations. Upon returning to the Department of Justice, he became the deputy inspector general in charge of investigations. --This text refers to the paperback edition....
                        </p>

                        <h1 className="author-name-tag">
                            <span>Louis De Martinis</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                        <button >
                            <Link to="/about-the-author">Read More</Link>
                        </button>
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={DummyAuthor} hidden />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;