import Container from "@/app/components/Container";
import ContactForm from "@/app/components/contactForm/ContactForm";

const ContactPage = () => {
    return (
        <Container>
            <h1>Contact Us</h1>
            <p>For any queries, please contact us at </p>
            <ContactForm
            isEmail
            isMessage
            />
        </Container>
    );
};

export default ContactPage;
