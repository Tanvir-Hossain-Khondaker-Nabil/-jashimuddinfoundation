import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleService() {
    const { serviceId } = useParams();  // Extract service ID from URL
    const [service, setService] = useState(null);

    useEffect(() => {
        // Fetch the service data based on the serviceId
        fetch(`https://jashimuddinfoundation.com/admin/public/api/services/${serviceId}`)
            .then((response) => response.json())
            .then((data) => setService(data[0]))  // Since the API returns an array, we get the first item
            .catch((error) => console.error('Error fetching service details:', error));
    }, [serviceId]);

    if (!service) {
        return <div>Loading...</div>;  // Show a loading message while fetching the data
    }

    return (
        <div>
            <div className="ibadat-inner-banner-main-wrapper">
                <div className="container custom-container">
                    <div className="inner-page-title">
                        <h2 id="service-we-provide">Single Service</h2>
                        <ul>
                            <li>
                                <a href="javascript:;" contentEditable="false" style={{ cursor: 'pointer' }}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" contentEditable="false" style={{ cursor: 'pointer' }}>
                                    | &nbsp; Single Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className="event-single-blog-wrapper wow fadeInUp  pb-5"
                data-wow-delay="300ms"
                style={{
                    visibility: 'visible',
                    animationDelay: '300ms',
                    animationName: 'fadeInUp',
                }}
            >
                <div className="event-img-wrapper text-center">
                    <img
                        src={`https://jashimuddinfoundation.com/admin/public/${service.photo}`}  // Dynamically load the service image
                        alt={service.title}
                    />
                </div>
                <div className="event-text-wrapper py-4 px-a px-md-5">
                    <h2 className='mb-3'>{service.title}</h2>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    );
}
