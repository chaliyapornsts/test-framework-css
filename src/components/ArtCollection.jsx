import { useState } from 'react'
import './ArtCollection.css'

const ArtCollection = () => {
    const initialMainImage = "./src/assets/3.jpg";
    const initialImages = [
        "./src/assets/KANUENGNIT _PHOSRI _(KAEW)2.jpg",
        "./src/assets/KANUENGNIT _PHOSRI _(KAEW)3.jpg",
        "./src/assets/KANUENGNIT _PHOSRI _(KAEW)4.jpg",
        "./src/assets/KANUENGNIT _PHOSRI _(KAEW)16.jpg"
    ];

    const [mainImage, setMainImage] = useState(initialMainImage);
    const [images, setImages] = useState(initialImages);

    const handleImageClick = (index) => {
        const newImages = [...images];
        const clickedImage = newImages[index];

        // Swap the images
        newImages[index] = mainImage;
        setMainImage(clickedImage);
        setImages(newImages);
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <img className='pt-14' src='./src/assets/Group 215.png' alt="Logo" width={300} />
            <div className="relative w-4/5">
                <img className="w-full pb-3 opacity-40" src={mainImage} alt="Main artwork" />
                <img className="absolute top-1/2 left-1/2 w-9/12 pb-3 transform -translate-x-1/2 -translate-y-1/2" src={mainImage} alt="Main artwork" />
            </div>
            <div className='w-9/12'>
                <h3 className='text-3xl font-semibold mt-5'>Kanuengnit Phosri (คนึงนิจ โพธิ์ศรี)</h3>
                <div className='grid grid-cols-2 justify-start mt-10'>
                    <p>Tile:-, 2022 | แสลมของคนแงงาน, 2565</p>
                    <p>Technique: Acrylic on canvas | สีอะคริลิคบนผ้าใบ</p>
                    <p>Size: 80 x 80 cm.</p>
                    <p>Donor: Kanuengnit Phosri</p>
                </div>
            </div>
            <div className='flex w-11/12 justify-between mt-16 mb-16'>
                <h3 className='font-bold'>Kanuengnit Phosri</h3>
                <p className=''>— 4 pieces</p>
            </div>
            <div className='grid grid-cols-4 gap-10 items-center text-center w-11/12 mb-64'>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            className="object-cover w-80 h-80 pb-3 cursor-pointer"
                            src={image}
                            alt={`Artwork ${index + 1}`}
                            onClick={() => handleImageClick(index)}
                        />
                        <p>
                            <b>แสลมของคนแรงงาน, 2565</b><br />
                            Kanuengnit Phosri
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArtCollection
