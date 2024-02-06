"use client"

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "./NextJsImage";

const LightboxImages = ({ images, isopen }) => {
    
    return (
        <Lightbox
            open={isopen}
            close={() => setOpen(false)}
            slides={images}
            render={{ slide: NextJsImage, thumbnail: NextJsImage }}
        />
    );
};
// ...

export default LightboxImages;
