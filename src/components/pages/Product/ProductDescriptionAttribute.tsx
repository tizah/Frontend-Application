import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
// import Button from "../../UI/Button";
import { fetchTrlList } from "../../../store/actions/ProductAction";

import TabPanel from "../../UI/Tabpanel";
import Tabs from "../../UI/Tab";

import "./ProductDescriptionAttribute.css";
import { BusinessModel, ProductCategory, TRL } from "../../../store/types";

interface ProductDescriptionAttributeProps {
  productDescription: string | undefined;
  categories: ProductCategory[] | undefined;
  businessModels: BusinessModel[] | undefined;
  trl: TRL | undefined;
}

const animatedComponents = makeAnimated();

const ProductDescriptionAttribute = ({
  productDescription,
  categories,
  businessModels,
  trl,
}: ProductDescriptionAttributeProps) => {
  const { trlList, siteConfig } = useSelector(
    (state: RootState) => state.product
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrlList());
    return () => {};
  }, []);

  const options = categories?.map((x) => ({ label: x.name, value: x.name }));

  const businessModelOptions = businessModels?.map((x) => ({
    label: x.name,
    value: x.name,
  }));

  const array = new Array(trlList);

  const trlOptions = array
    .flat()
    .map((x) => ({ value: x?.name, label: x?.name }));

  return (
    <div className="container">
      <Tabs mainColor={siteConfig?.mainColor}>
        <TabPanel name="Description" key="1">
          {productDescription}
        </TabPanel>
        <TabPanel name="Attributes" key="2">
          <h4>Categories</h4>
          <Select
            options={options}
            defaultValue={options}
            isMulti
            components={animatedComponents}
            placeholder="Select product categories"
            onChange={() => {}}
          />
          <h4>Business Models</h4>
          <Select
            options={businessModelOptions}
            defaultValue={businessModelOptions}
            isMulti
            components={animatedComponents}
            placeholder="Select your business models"
            onChange={() => {}}
          />

          <h4>TRL</h4>
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={[trl?.name]}
            isSearchable={true}
            name="TRL"
            options={trlOptions}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ProductDescriptionAttribute;
