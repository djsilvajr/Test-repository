const IsMobile = () => {
    const userAgent = navigator.userAgent;
    
    // Checa se é um dispositivo móvel
    return /android|iphone|ipad|ipod|windows phone|opera mini|mobile/i.test(userAgent);
};

export default IsMobile