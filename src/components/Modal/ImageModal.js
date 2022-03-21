import React from "react";
import ModalSC from "./ModalSC";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function ImageModal({
  imageModalProject,
  setShowImageModal,
  showImageModal,
  imageModalSrc,
  setImageModalSrc,
}) {
  const handleImgChange = (dir) => {
    const totalImages = imageModalProject.imgs.length - 1;

    if (dir === "fwd") {
      if (imageModalSrc === totalImages) {
        setImageModalSrc(0);
      } else {
        setImageModalSrc(imageModalSrc + 1);
      }
    } else {
      if (imageModalSrc === 0) {
        setImageModalSrc(totalImages);
      } else {
        setImageModalSrc(imageModalSrc - 1);
      }
    }
  };

  return (
    <ModalSC.ModalPage
      className={`modal-page ${showImageModal ? "open" : "close"}`}
    >
      <ModalSC.ModalContainer
        className={`modal-container ${showImageModal ? "open" : "close"}`}
      >
        {/* CLOSE ICON */}
        <CloseIcon
          className="close-icon"
          onClick={() => setShowImageModal(false)}
        />
        {/* ARROW LEFT */}
        <ArrowBackIosNewIcon
          className="arrow-icon back"
          onClick={() => handleImgChange("back")}
        />
        {/* ARROW RIGHT */}
        <ArrowForwardIosIcon
          className="arrow-icon fwd"
          onClick={() => handleImgChange("fwd")}
        />
        {/* IMAGE */}
        {showImageModal && (
          <a
            href={imageModalProject.imgs[imageModalSrc].src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ModalSC.ModalImg
              src={imageModalProject.imgs[imageModalSrc].src}
              alt=""
            />
          </a>
        )}
        {/* IMAGE COUNT */}
        <ModalSC.ImageCountContainer>
          {imageModalSrc + 1} /{" "}
          {imageModalProject.imgs !== undefined
            ? imageModalProject.imgs.length
            : 0}
        </ModalSC.ImageCountContainer>
      </ModalSC.ModalContainer>
      <ModalSC.ModalBackground
        className={`modal-background ${showImageModal ? "open" : "close"}`}
        onClick={() => setShowImageModal(false)}
      ></ModalSC.ModalBackground>
    </ModalSC.ModalPage>
  );
}
