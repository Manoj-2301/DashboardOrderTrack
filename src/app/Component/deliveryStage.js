import { FaBox, FaTruck, FaMapMarkerAlt, FaLaptop } from "react-icons/fa";
import "./ShipmentTimeline.scss";

const ShipmentTimeline = () => {
  const currentStage = "0"; 

  const stages = [
    { icon: <FaBox />, },
    { icon: <FaLaptop />,  },
    { icon: <FaTruck />,  },
    { icon: <FaMapMarkerAlt />, },
  ];

  return (
    <div className="timeline-container">
      {stages.map((stage, index) => (
        <div key={index} className={`timeline_stage ${index <= currentStage ? "active" : ""}`}>
          <div className='icons'>
            {stage.icon}
            {index < stages.length - 1 && <div className="line"></div>}
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default ShipmentTimeline;
