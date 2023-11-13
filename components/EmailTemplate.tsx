interface EmailTamplateProps {
    name: string;
    email: string;
    message: string;
}

export const ContactForm: React.FC<EmailTamplateProps> = ({ name, email, message }) => {
    return (
        <div>
            <h1>Contato do site</h1>
            <p>Nome: {name}</p>
            <p>Email: {email}</p>
            <p>Mensagem: {message}</p>
        </div>
    )
}