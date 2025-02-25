import { FaBox, FaTruck, FaMapMarkerAlt, FaLaptop } from "react-icons/fa";
import "./ShipmentTimeline.scss";

const ShipmentTimeline = ({ progress }) => {
  const stages = [
    { icon: <FaBox />, label: "Package" },
    { icon: <FaLaptop />, label: "Processing" },
    { icon: <FaTruck />, label: "In-Transit" },
    { icon: <FaMapMarkerAlt />, label: "Delivered" },
  ];

  return (
    <div className="timeline-container">
      {stages.map((stage, index) => (
        <div key={index} className="timeline_stage">
          <div className="icons">
            {stage.icon}
          </div>
          <p className="lable_size">{stage.label}</p>         
        </div>
      ))}
    </div>
  );
};

export default ShipmentTimeline;