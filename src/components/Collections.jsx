import { Button, ButtonGroup } from 'keep-react'
import { Divider } from 'keep-react'
import { useState } from 'react'
import { Modal, ModalBody, ModalFooter } from 'keep-react'
import './Collections.css'

const Collections = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const images = [
    "./src/assets/1.jpg",
    "./src/assets/2.jpg",
    "./src/assets/3.jpg",
    "./src/assets/4.jpg",
    "./src/assets/5.jpg",
    "./src/assets/6.jpg",
    "./src/assets/7.jpg",
    "./src/assets/8.jpg",
    "./src/assets/22.jpg",
    "./src/assets/396.jpg",
    "./src/assets/KANUENGNIT _PHOSRI _(KAEW)2.jpg",
    "./src/assets/KANUENGNIT _PHOSRI _(KAEW)3.jpg",
    "./src/assets/KANUENGNIT _PHOSRI _(KAEW)4.jpg",
    "./src/assets/KANUENGNIT _PHOSRI _(KAEW)16.jpg"
  ];

  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalBody className="flex w-[30rem] flex-col items-center p-6 lg:p-8">
          <img src={selectedImage} alt="Selected artwork" />
          <ModalFooter>
            <Button className='mt-5' onClick={closeModal} size="sm" color="secondary" variant="outline">
              Confirm
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
      <img className='pt-14' src='./src/assets/Group 215.png' alt="Logo" width={300} />
      <div>
        <p>
          <b>The Rama IX Art Museum Foundation { }</b>
          collection consists of works of art donated to the Foundation<br />
          Foundation for its permanent collection by Thai artist and collectors.<br />
          The collection now consists of 400 works of art by various Thai artists.
        </p>
        <p className='mt-9'>
          ศิลปินและผู้สะสมงานศิลปะหลายท่านได้ร่วมใจบริจาคงานศิลปะให้แก่มูลนิธิหอศิลปะแห่งรัชกาลที่ ๙ <br />
          เพื่อเป็นศิลปะกรรมสะสมถาวร ปัจจุบันมูลนิธิฯ มีผลงานศิลปะสะสมรวมจำนวน ๔๐๐ ชิ้น จากหลากหลายศิลปินไทย
        </p>
        <div className='flex justify-between mt-20 mb-2'>
          <h3 className='text-2xl hover:text-orange-400 cursor-pointer'>INSTITTUTIONAL COLLECTIONS</h3>
          <h3 className='text-2xl hover:text-orange-400 cursor-pointer'>PRIVATE COLLECTIONS</h3>
        </div>
        <Divider />
        <div>
          <ButtonGroup className='flex justify-center mt-8'>
            <p className='pr-6 text-orange-400 font-semibold'>All</p>
            <p className='pr-6 font-semibold'>—</p>
            <Button>A</Button>
            <Button>B</Button>
            <Button>C</Button>
            <Button>D</Button>
            <Button>E</Button>
            <Button>G</Button>
            <Button>H</Button>
            <Button>I</Button>
            <Button>J</Button>
            <Button>K</Button>
            <Button>L</Button>
            <Button>M</Button>
            <Button>N</Button>
            <Button>O</Button>
            <Button>P</Button>
            <Button>Q</Button>
            <Button>R</Button>
            <Button>S</Button>
            <Button>T</Button>
            <Button>U</Button>
            <Button>V</Button>
            <Button>W</Button>
            <Button>X</Button>
            <Button>Y</Button>
            <Button>Z</Button>
          </ButtonGroup>
        </div>
        <p className='flex justify-end my-5 mt-32 font-semibold'>
          — 256 pieces
        </p>
        <div className="grid grid-cols-4 gap-10 items-center">
          {images.map((image, index) => (
            <div key={index}>
              <img onClick={() => openModal(image)} className="shadow object-cover w-80 h-80 cursor-pointer" src={image} alt={`Artwork ${index + 1}`} />
              <p className='pt-8'>
                <b>แสลมของคนแรงงาน, 2565</b><br />
                Kanuengnit Phosri
              </p>
            </div>
          ))}
        </div>
        <div className='flex justify-end items-center mb-64'>
          <p className='pr-2'>1</p>
          <p className='pr-2'>————————————— 256</p>
          <button className='btn mr-2 bg-slate-200 w-10 h-10 rounded-full'>B</button>
          <button className='btn mr-2 bg-slate-200 w-10 h-10 rounded-full'>N</button>
        </div>
      </div>
    </div>
  )
}

export default Collections
