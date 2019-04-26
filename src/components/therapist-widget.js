import React from "react";
const Therapist = ({ therapistDescription }) => {
  return (
    <div className="row">
      {therapistDescription.map(items => {
        return (
          <div key={items.id} className="col-4 therapistpage-leftalign">
            {/* left Image and tooltip */}
            <div className="col-md-2 col-xs-2 ">
              <div className="row">
                <div className="col-md-12 col-xs-12">
                  <img className="img-fluid" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-xs-12 tooltip">
                  <img
                    src="https://www.beyondbiomag.io/images/specialization.png"
                    className="img-fluid therapist-image-clients"
                    alt=""
                  />
                  <span className="tooltiptext">
                    <ul className="tooltip_list">
                      <li className="tooltip_list_type">blah </li>
                      <li className="tooltip_list_type">dsdv sdvsdfv</li>
                      <li className="tooltip_list_type">dvdv</li>
                      <li className="tooltip_list_type">sdvv </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
            {/* Right Side : details */}
            <div className="col-md-10 col-xs-10 therapist-contact-details">
              <h5 className="therapistHeading">{items.therapistName}</h5>
              <p className="therapistYear">{items.therapistYear}</p>
              {items.therapistCityDetails.map((item, index) => {
                return (
                  <p key={index} className="therapistHeadingDetails">
                    {" "}
                    {item}
                  </p>
                );
              })}
              <p
                className="therapistPhonenumber"
                dangerouslySetInnerHTML={{ __html: items.therapistPhonenumber }}
              />
              <p
                className="therapistGmail"
                dangerouslySetInnerHTML={{ __html: items.therapistGmail }}
              />
              <p
                class="therapistWebsite"
                dangerouslySetInnerHTML={{ __html: items.therapistWebsite }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Therapist;
