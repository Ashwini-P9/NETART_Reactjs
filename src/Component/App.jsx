import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const App = () => {
  return (
    <>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <table>
        <tr>
          <section className="flex-container">
            <section>
              <img src="/asserts/1.png" height={800} width={700} />
            </section>
            <aside>
              <img src="asserts/logo.png" />
              <p>
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time. C.R.I.'s energy efficient products are well
                recognized by various Government Institutions, as trustworthy
                products for various projects across the globe to save energy.
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </p>
              <img src="/asserts/2.png" height={500} width={1000} />
              Government of India has awarded the "National Energy Conservation
              Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </aside>
          </section>
        </tr>

        <tr>
          <p>
            
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>

          <img
            className="pumps"
            src="/asserts/3.png"
            height={700}
            width={1400}
          
          />
        <div className="text-center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}> 
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
          </div>
          <hr />
          <div className="text-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}> 
          <b  > C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
          </div>
          <br />
          <br />
          <section>
            CHEMICALS & PROCESS | POWER WATER & WASTE WATER | OILS & GAS |PHARMA
            SUGARS & DISTILLERIES | PAPER & PULP MARINE & DEFENCE METAL & MINING
            FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING| HVAC FIRE
            FIGHTING AGRICULTURE & RESIDENTIAL
          </section>
        </tr>
        <tr>
          <footer className="menuBlock"
          >
            <ul >
              <li className="icon">
                
                <FaPhoneSquareAlt />
                <span>
                  <sub>Toll free:1800 200 1234</sub>
                </span>
                
              </li>
              <li className="icon">
              
                <FaFacebook /> 
                <span>
                  <sub> www.facebook.com/cripumps</sub>
                </span>
              </li>
              <li className="icon">
               
                <FaGlobe /> 
                <span>
                
                  <sub> www.crigroups.com</sub>
                </span>
              </li>
            </ul>
          </footer>
        </tr>
      </table>
    </>
  );
};

export default App;
