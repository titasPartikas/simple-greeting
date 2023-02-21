import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";

const ContactUsPage = () => {
    return (<>
        <h1>Contact Us Page</h1>
        <Link to={routes.homePage}>Back to home page</Link>
    </>)
}

export default ContactUsPage;