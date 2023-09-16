import React,{useState} from 'react'
import './Content.css'
import IMAGES from '../img/index1'
export default function Content() {
 
  return (
    <div>
      <div className="Content">
      <div className="MainNavbar">
     
        <div className="navbar01">
          <div className="icon-device">
            <img src={IMAGES.content.dashboard} className="icon-hover" alt="" />
            </div>
          <div className="device"> Dashboard</div>
        </div>
        <div className="navbar">
          <div className="icon-device">
          <img src={IMAGES.content.device} alt="" />
          </div>
          <div className="device">Device</div>
        </div>
        <div className="navbar">
          <div className="icon-device">
          <img src={IMAGES.content.light} alt="" />
          </div>
          <div className="device"> Light</div>
        </div>
        <div className="navbar">
          <div className="icon-device">
          <img src={IMAGES.content.tempera} alt="" />
          </div>
          <div className="device"> Temperature</div>
        </div>
        <div className="navbar">
          <div className="icon-device">
          <img src={IMAGES.content.electricity} alt="" />
          </div>
          <div className="device"> Electricity</div>
        </div>
        <div className="navbar">
          <div className="icon-device">
          <img src={IMAGES.content.wifi} alt="" />
          </div>
          <div className="device"> Wi-Fi</div>
        </div>
        
        </div>
        <div className="Weather">
          b
        </div>
        <div className="Temperture">
        <div className="temp">
          <div className="name-temperture">Temperture</div>
          <div className="temp1">
          <div className="img-temperature">
            <img src={IMAGES.content.temp} alt="" />
        </div>
          <div className="up-temp">
            16*C
          </div>
          <div className="con-temp">
          <div className="higher">
            <img src={IMAGES.content.higher} className='IMAGES' alt="" />
          </div>
          <div className="low">
            <img src={IMAGES.content.low} alt="" />
          </div>
          </div>
          </div>
          <div className="auto">
            <div className="name-auto">
          Auto Room Temperature System
          </div>
          <div className="toogle">
            <img src={IMAGES.content.toogle} alt="" />
          </div>
          </div>
          </div>
        </div>
        <div className="Wi-Fi">
          d
        </div>
        <div className="Electricity">
          e
        </div>
        <div className="QuickPanel">
        <div className="panel">
          Quick Panel
        </div>
        <div className="control-panel01">
          <div className="icon-panel">icon</div>
          <div className="device-panel">Light</div>
          <div className="toogle-panel">toogle</div>
        </div>
        <div className="control-panel">
          <div className="icon-panel">icon</div>
          <div className="device-panel">Music</div>
          <div className="toogle-panel">toogle</div>
        </div>
        <div className="control-panel">
          <div className="icon-panel">icon</div>
          <div className="device-panel">Wi-Fi</div>
          <div className="toogle-panel">toogle</div>
        </div>
        <div className="control-panel">
          <div className="icon-panel">icon</div>
          <div className="device-panel">CCTV</div>
          <div className="toogle-panel">toogle</div>
        </div>
        <div className="control-panel">
          <div className="icon-panel">icon</div>
          <div className="device-panel">Security</div>
          <div className="toogle-panel">toogle</div>
        </div>
        </div>
      </div>
    </div>
  )
}
