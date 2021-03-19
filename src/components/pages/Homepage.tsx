import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

import { RootState } from "../../store";

import "./Homepage.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Homepage: FC = () => {
  const { siteConfig } = useSelector((state: RootState) => state.product);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <div className="homepage">
      <div className="homepageImage">
        {loading ? (
          <ClipLoader
            color={color}
            loading={loading}
            css={override}
            size={150}
          />
        ) : (
          <img src={siteConfig?.logo} alt="company logo" />
        )}
      </div>
    </div>
  );
};

export default Homepage;
