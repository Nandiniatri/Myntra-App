const Image = ({ src, onClick, className, alt }) => {
    return (
        <img src={src} onClick={onClick} className={className} alt={alt} />
    )
}

export default Image; 