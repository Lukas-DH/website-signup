import React from "react";

const ProductList = ({ currentText, formData, toggleProductInterest }) => {
  return (
    <div className="form-group">
      <label>{currentText.productList}:</label>
      <div className="product-selection">
        <button
          type="button"
          className={`product-item ${
            formData.productInterest.includes("All Products") ? "selected" : ""
          }`}
          onClick={() => toggleProductInterest("All Products")}
        >
          <img
            src="/caring-logo.png"
            alt="Logo All Products"
            className="product-logo"
          />
          <span>{currentText.allProducts}</span>
          <div className="tooltip-text">Click to select all products</div>
        </button>

        <button
          type="button"
          className={`product-item ${
            formData.productInterest.includes("Timelapse") ? "selected" : ""
          }`}
          onClick={() => toggleProductInterest("Timelapse")}
        >
          <img src="/timelapse.jpeg" alt="Geri" className="product-logo" />
          <span>{currentText.Timelapse}</span>
          <div className="tooltip-text">{currentText.TimelapseHover}</div>
        </button>

        <button
          type="button"
          className={`product-item ${
            formData.productInterest.includes("Witnessing") ? "selected" : ""
          }`}
          onClick={() => toggleProductInterest("Witnessing")}
        >
          <img
            src="/witnessing.jpeg"
            alt="Witnessing"
            className="product-logo"
          />
          <span>{currentText.witnessing}</span>
          <div className="tooltip-text">{currentText.witnessingHover}</div>
        </button>

        <button
          type="button"
          className={`product-item ${
            formData.productInterest.includes("Culture Media") ? "selected" : ""
          }`}
          onClick={() => toggleProductInterest("Culture Media")}
        >
          <img src="/gems2.jpeg" alt="Gems" className="product-logo" />
          <span>{currentText.media}</span>
          <div className="tooltip-text">{currentText.mediaHover}</div>
        </button>

        <button
          type="button"
          className={`product-item ${
            formData.productInterest.includes("Cryolock") ? "selected" : ""
          }`}
          onClick={() => toggleProductInterest("Cryolock")}
        >
          <img src="/cryolock.jpeg" alt="cryolock" className="product-logo" />
          <span>{currentText.cryolock}</span>
          <div className="tooltip-text">{currentText.cryolockHover}</div>
        </button>

        <button
          type="button"
          className={`product-item ${
            formData.productInterest.includes("S-Cryolock") ? "selected" : ""
          }`}
          onClick={() => toggleProductInterest("S-Cryolock")}
        >
          <img
            src="/s-cryolock.jpg"
            alt="s-cryolock"
            className="product-logo"
          />
          <span>{currentText.scryolock}</span>
          <div className="tooltip-text">{currentText.scryolockHover}</div>
        </button>

        <button
          type="button"
          className={`product-item ${
            formData.productInterest.includes("Digital Cameras")
              ? "selected"
              : ""
          }`}
          onClick={() => toggleProductInterest("Digital Cameras")}
        >
          <img src="/geri.jpeg" alt="Geri" className="product-logo" />
          <span>{currentText.digitalCameras}</span>
          <div className="tooltip-text">{currentText.digitalCamerasHover}</div>
        </button>

        <button
          type="button"
          className={`product-item ${
            formData.productInterest.includes("CareBot") ? "selected" : ""
          }`}
          onClick={() => toggleProductInterest("CareBot")}
        >
          <img src="/UR3e_01_R.png" alt="Gems" className="product-logo" />
          <span>{currentText.carebot}</span>
          <div className="tooltip-text">{currentText.carebotHover}</div>
        </button>
        <button
          type="button"
          className={`product-item ${
            formData.productInterest.includes("Leica") ? "selected" : ""
          }`}
          onClick={() => toggleProductInterest("Leica")}
        >
          <img src="/leica.jpeg" alt="Leica" className="product-logo" />
          <span>{currentText.leica}</span>
          <div className="tooltip-text">{currentText.leicaHover}</div>
        </button>
      </div>
    </div>
  );
};

export default ProductList;
