import { useState } from "react";


const QrCode = () => {
    const [img,setImg] = useState("Images/download.png")
    const [loading,setLoading] = useState(false)

    async function generateQR(){
       setLoading(true)
       try{
          const url = "";
          setImg(url);
       }
       catch(error){
        console.error("error generating QR code",error);
       }
       finally{
        setLoading(false);
       }
    }
    function downloadQR(name){}
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please wait....</p>}
        {img && <img src={img}  className="qr-code-image" />}
      <div>
        <label htmlFor="dataInput" className="input-lable">Data for QR code :</label>
        <input type="text" id="dataInput" placeholder="Enter data for QR code" />
        <label htmlFor="sizeInput" className="input-lable">Image size (e.g., 150) :</label>
        <input type="text" id="sizeInput" placeholder="Enter image size" />
        <button className="generate-button" onClick={generateQR }>Generate QR Code</button>
        <button className="download-button" >Download QR Code</button>
      </div>
      <p className="footer">Designed by <a href="">@Tamil</a></p>
    </div>
  );
}

export default QrCode;
