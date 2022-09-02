import React, { useEffect, useState } from "react";
import { getWomenEntrepreneur } from "../lib/api";

const womenEnterpreneur = ({ wpdata }) => {
  // console.log(wpdata);
  const {
    personalityQuote,
    mandatoryDocuments,
    eligibilityCrieteria,
    incentives,
    test,
  } = wpdata.womenEnterpreneur;
  const { title, image } = wpdata.commonBanner;
  return (
    <div>
      <div className="we-area">
        <div className="container">
          <div
            dangerouslySetInnerHTML={{
              __html: `<b>${personalityQuote}</b>`,
            }}
          ></div>
        </div>
      </div>
      <div className="we-area ec">
        <div className="container">
          <div
            dangerouslySetInnerHTML={{
              __html: eligibilityCrieteria,
            }}
          ></div>
        </div>
      </div>
      <div className="we-area mand__doc">
        <div className="container">
          <div
            dangerouslySetInnerHTML={{
              __html: mandatoryDocuments,
            }}
          ></div>
        </div>
      </div>
      <div className="we-area incentive">
        <div className="container">
          <div
            dangerouslySetInnerHTML={{
              __html: incentives,
            }}
          ></div>
        </div>
      </div>
      <div>
        {test?.map((item, i) => (
          <div className="container" key={i}>
            <div>{item.text}</div>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default womenEnterpreneur;

export async function getServerSideProps() {
  const res = await getWomenEntrepreneur();
  return {
    props: {
      wpdata: res.page,
    },
  };
}
