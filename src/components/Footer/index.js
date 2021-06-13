import { React } from "react";
import "../../assets/css/footer.css"

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container text-center">
                    <div className="d-flex justify-content-center">
                        <p className="footer-title mr-3">Terms of Use</p>
                        <p className="footer-title mr-3">Privacy Police</p>
                        <p className="footer-title">Disclaimer</p>
                    </div>
                    <div>
                        <p className="footer-title">Line Corporation</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;