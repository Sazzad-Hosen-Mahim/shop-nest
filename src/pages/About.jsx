import ServiceProcess from "../components/AboutUs/ServiceProcess";
import OfferProductReview from "../components/AboutUs/OfferProductReview.jsx";
import OfferBag from "../components/AboutUs/OfferBag.jsx";
import NewsletterSection from "../components/closetProducts/NewsletterSection.jsx";

const About = () => {

    return (
        <div className="bg-white">
            <ServiceProcess />
            <OfferBag />
            <OfferProductReview />
            <NewsletterSection />

        </div>
    );
};



export default About;
