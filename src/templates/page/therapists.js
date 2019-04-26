import React from "react";
import Layout from "../../layout/layout";
import SEO from "../../components/seo";

import Therapist from '../../components/therapist-widget';

import { graphql } from "gatsby";

const Therapists = ({ data }) => {

  const therapistsBrandFilter = data.biomagJson.therapist.therapistDetail;
  const therapistDescription = data.biomagJson.therapist.therapistDescription;

  return (
    <Layout>
      <SEO title="Therapists" />
      <div className="container">
        <div className="row">FILTER BY LOCATION</div>
        <div className="row pt-2">
 
        <div id="therapist">
          <div className="col-md-12 therapist-column-alignments">
          <Therapist therapistDescription={therapistDescription}/>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export const IndexTherapistList = graphql`
  {
    biomagJson {
      therapist {
        therapistDetail {
          id
          therapistbrandFilter
          therapistCountry
        }
        therapistDescription {
          id
          therapistImg
          therapistName
          therapistYear
          therapistCityDetails
          therapistPhonenumber
          therapistGmail
          therapistWebsite
          therapistTooltip
        }
      }
    }
  }
`;

export default Therapists;
