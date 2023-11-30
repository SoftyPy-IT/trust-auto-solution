import { useContext } from "react";
import { PrintContext } from "../../pages/context/PrintProvider";

const CommonButton = () => {
    const {handlePrint, toPDF} = useContext(PrintContext)
    return (
        <div>
              <div className="printInvoiceBtnGroup">
                <button onClick={handlePrint}>Print </button>
                <button onClick={() => toPDF()}>Pdf </button>
                <button >Edit </button>
            </div>
        </div>
    );
};

export default CommonButton;