import './shipStyle.scss'
import Stages from '../Component/deliveryStage'
const shippmentMap = () => {

  const shipments = [
    {
      "shipment_id": "SHP-5574",
      "shipment_event": "event",
      "shipment_progress": "In Progress",
      "expected_arrival": "04 Feb 2024",
      "order": "Order-12567",
      "carrier": "FedEx",
      "status": "In Progress"
    },
    {
      "shipment_id": "SHP-5574",
      "shipment_event": "event",
      "shipment_progress": "Draft",
      "expected_arrival": "04 Feb 2024",
      "order": "Order-12567",
      "carrier": "FedEx",
      "status": "Draft",
      "time": "delayed"

    },
    {
      "shipment_id": "SHP-5574",
      "shipment_event": "event",
      "shipment_progress": "Arrived",
      "expected_arrival": "04 Feb 2024",
      "order": "Order-12567",
      "carrier": "DHL",
      "status": "Arrived"
    },
    {
      "shipment_id": "SHP-5574",
      "shipment_event": "event",
      "shipment_progress": "Canceled",
      "expected_arrival": "04 Feb 2024",
      "order": "Order-12567",
      "carrier": "DHL",
      "status": "Canceled"
    },
    {
      "shipment_id": "SHP-5574",
      "shipment_event": "event",
      "shipment_progress": "In Progress",
      "expected_arrival": "04 Feb 2024",
      "order": "Order-12567",
      "carrier": "DHL",
      "status": "In Progress"
    },
    {
      "shipment_id": "SHP-5574",
      "shipment_event": "event",
      "shipment_progress": "Delayed",
      "expected_arrival": "04 Feb 2024",
      "order": "Order-12567",
      "carrier": "TNT",
      "status": "Delayed"
    },
    {
      "shipment_id": "SHP-5574",
      "shipment_event": "event",
      "shipment_progress": "Arrived",
      "expected_arrival": "04 Feb 2024",
      "order": "Order-12567",
      "carrier": "FedEx",
      "status": "Arrived"
    },
    {
      "shipment_id": "SHP-5574",
      "shipment_event": "event",

      "shipment_progress": "In Progress",
      "expected_arrival": "04 Feb 2024",
      "order": "Order-12567",
      "carrier": "Aramex",
      "status": "In Progress",
      "time": "delayed"

    },
    {
      "shipment_id": "SHP-5574",
      "shipment_event": "event",
      "shipment_progress": "Arrived",
      "expected_arrival": "04 Feb 2024",
      "order": "Order-12567",
      "carrier": "UPS",
    },
    {
      "shipment_id": "SHP-5574",
      "shipment_event": "event",
      "shipment_progress": "Arrived",
      "expected_arrival": "04 Feb 2024",
      "order": "Order-12567",
      "carrier": "Regular",
      "time": "delayed"
    }
  ]
  return (
    <div className='map_container'>
      <div className='map_heading_list'>
        <div>
          <p>Shipment Id </p>
        </div>
        <div className='Event'>
          <hr />
          <p>Shipment Event</p>
        </div>
        <div className='progress'>
          <hr />
          <p>Shipment Progress</p>
        </div>
        <div className='arrived'>
          <hr />
          <p>Expected arrived </p>
        </div>
        <div className='order'>
          <hr />
          <p>Order</p>
        </div>
        <div className='carrier' >
          <hr />
          <p>Carrier</p>
        </div>
      </div>
      <div>
        {shipments.map((shipment, index) => (
          <div key={index}>
            <div className='shipments'>
              <div className='shipmentid'>
                <p>{shipment.shipment_id} </p>
              </div>
              <div className='shipment_event'>
                <Stages/>
              </div>
              {shipment.shipment_progress === 'In Progress' && (
                  <div className='shipment_width'>
                  <div className='shipment_progress in-progress'>
                    <i className="fi fi-bs-map-marker-home"></i>
                    <p>{shipment.shipment_progress}</p>
                  </div>
                </div>
                )}
              {shipment.shipment_progress === 'Arrived' && (
                  <div className='shipment_width'>
                  <div className='shipment_progress arrived'>
                    <i className="fi fi-bs-map-marker-home"></i>
                    <p>{shipment.shipment_progress}</p>
                  </div>
                </div>
                )}
              {shipment.shipment_progress === 'Delayed' && (
                  <div className='shipment_width'>
                  <div className='shipment_progress delayed'>
                    <i className="fi fi-bs-map-marker-home"></i>
                    <p>{shipment.shipment_progress}</p>
                  </div>
                </div>
                )}
              {shipment.shipment_progress === 'Canceled' && (
                  <div className='shipment_width'>
                  <div className='shipment_progress canceled'>
                    <i className="fi fi-bs-map-marker-home"></i>
                    <p>{shipment.shipment_progress}</p>
                  </div>
                </div>
                )}
              {shipment.shipment_progress === 'Draft' && (
                  <div className='shipment_width'>
                  <div className='shipment_progress draft'>
                    <i className="fi fi-bs-map-marker-home"></i>
                    <p>{shipment.shipment_progress}</p>
                  </div>
                </div>
                )}
              <div className='shipment_arrive'>
                <p>{shipment.expected_arrival}</p>
                {shipment.time && (
                  <div className='delay'>
                    <i className="fi fi-ss-triangle-warning"></i>
                    <p>{shipment.time}</p>
                  </div>
                )}
              </div>
              <div className='shipment_order'>
                <p>{shipment.order}</p>
              </div>
              <div className='shipment_carrier'>
                <p>i</p>
                <p>{shipment.carrier}</p>
              </div>
            </div>
            <hr className='hrline' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default shippmentMap