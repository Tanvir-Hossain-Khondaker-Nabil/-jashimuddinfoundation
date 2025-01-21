import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Service() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Fetch the services data from the API
        fetch('https://jashimuddinfoundation.com/admin/public/api/services')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    return (
        <div>
            <div className="ibadat-inner-banner-main-wrapper">
                <div className="container custom-container">
                    <div className="inner-page-title">
                        <h2 id="service-we-provide">Service We Provide</h2>
                        <ul>
                            <li>
                                <a
                                    href="javascript:;"
                                    contentEditable="false"
                                    style={{ cursor: 'pointer' }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:;"
                                    contentEditable="false"
                                    style={{ cursor: 'pointer' }}
                                >
                                    | &nbsp; Our Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ibadat-event-text-main-wrapper">
                <div className="container custom-container">
                    <div className="event-inner-main-wraper">
                        <div className="single-blog-wrapper blog-3-coloumn">
                            <div className="multi-blog-wrapper">
                                {services.map((service) => (
                                    <div
                                        className="event-blog-wrapper wow fadeInUp"
                                        key={service.id}
                                        data-wow-delay="300ms"
                                        style={{
                                            visibility: 'visible',
                                            animationDelay: '300ms',
                                            animationName: 'fadeInUp',
                                        }}
                                    >
                                        <div className="event-img">
                                            <img
                                                src={`https://jashimuddinfoundation.com/admin/public/${service.photo}`}
                                                alt={service.title}
                                            />
                                        </div>
                                        <div className="event-text">
                                            <h4 className="text-center pt-0" id="quran-learning">
                                                <Link to={`/single-service/${service.id}`}>
                                                    {service.title}
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
