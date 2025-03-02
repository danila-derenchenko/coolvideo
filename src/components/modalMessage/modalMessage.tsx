import './modalMessage.css'

interface ModalMessageProps {
    message: string;
    isVisible: boolean;
}

const ModalMessage: React.FC<ModalMessageProps> = ({ message, isVisible }) => {
    return (
        <div className={`modalMessage ${isVisible ? "show" : "hide"}`}>
            {message}
        </div>
    )
}

export default ModalMessage
