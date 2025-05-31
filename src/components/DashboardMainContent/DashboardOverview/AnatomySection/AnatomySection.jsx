import "./AnatomySection.css";

import { MdOutlineZoomIn } from "react-icons/md";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { IoScanSharp } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { GiLeg } from "react-icons/gi";
import anatomyImage from "../../../../assets/Anatomy-Image.png";

function AnatomySection() {
    return (
        <div className="anatomySection">
            <div className="zoomIcon"><MdOutlineZoomIn /></div>
            <div className="anatomySectionImageAndStatus">
                <img src={anatomyImage} alt="anatomySection" />
                <div className="heart statusContainer">
                    <div className="statusContainerPosition">
                        <IoScanSharp />
                        <div className="lines"></div>
                    </div>
                    <div className="statusContainerLabel">
                        <IoIosHeart />
                        <p>Healthy Heart</p>
                    </div>
                </div>
                <div className="leg statusContainer">
                    <div className="statusContainerPosition">
                        <IoScanSharp />
                        <div className="lines"></div>
                    </div>
                    <div className="statusContainerLabel">
                        <GiLeg />
                        <p>Healthy Leg</p>
                    </div>
                </div>
            </div>
            <div className="rotateSection">
                <svg className="curve" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q50,30 100,10" stroke="#ccc" fill="none" strokeWidth="2" />
                </svg>
                <div className="rotateIcon">
                    <FaArrowRotateLeft />
                </div>
            </div>

        </div>
    );
}

export default AnatomySection;