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
            formData.productInterest.includes("Lenshooke") ? "selected" : ""
          }`}
          onClick={() => toggleProductInterest("Lenshooke")}
        >
          <img src="/Lenshooke.jpg" alt="Lenshooke" className="product-logo" />
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
            formData.productInterest.includes("Caring Genea Cryokit")
              ? "selected"
              : ""
          }`}
          onClick={() => toggleProductInterest("Caring Genea Cryokit")}
        >
          <img src="/gems.jpeg" alt="Gems" className="product-logo" />
          <span>{currentText.cryokit}</span>
          <div className="tooltip-text">{currentText.cryokitHover}</div>
        </button>
      </div>
    </div>
  );
};

export default ProductList;
