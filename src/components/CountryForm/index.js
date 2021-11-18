import { useEffect } from "react";
import { Form, Input, Alert } from "antd";
import CustomButton from "../CustomButton";
import classes from "./styles.module.scss";
import * as validationRules from "../../constants/validationRules";
import { editCountry, addCountry } from "../../redux/slices/countriesSlice";
import {
  getCountriesSuccess,
  getCountriesError,
} from "../../redux/selectors/countries";
import { useDispatch, useSelector } from "react-redux";

const CountryForm = ({ data, handleClose, isEdit, form }) => {
  const dispatch = useDispatch();
  const countriesSuccess = useSelector(getCountriesSuccess);
  const countriesError = useSelector(getCountriesError);

  useEffect(() => {
    // set data in form fields if the form is edit country
    if (isEdit) {
      const countryData = {
        CountryName: data?.name?.common,
        capital: data?.capital?.[0],
        countryFlag: data?.flags?.svg,
        region: data?.region,
        population: data?.population,
        lat: data?.latlng?.[0],
        lng: data?.latlng?.[1],
      };
      form.setFieldsValue(countryData);
    } else {
      // reset fields if the form is add country
      form.resetFields();
    }
  }, [data, isEdit, form]);

  // close the modal if the edit or add is success
  useEffect(() => {
    if (countriesSuccess) {
      handleClose();
    }
  }, [countriesSuccess, handleClose]);

  const onFinish = (values) => {
    if (isEdit) {
      values.flag = data?.flag;
      dispatch(editCountry(values));
    } else {
      // generate flag(id) for the country if it added
      values.flag = Math.random().toString();
      dispatch(addCountry(values));
    }
  };

  // check if the value of longitude is between -180 and 180
  const longitudeValidator = async (rule, value) => {
    if (value < -180 || value > 180) {
      throw new Error("Please enter valid longitude value ");
    }
  };

  // check if the value of latitude is between -90 and 90
  const latitudeValidator = async (rule, value) => {
    if (value < -90 || value > 90) {
      throw new Error("Please enter valid latitude value ");
    }
  };
  return (
    <Form
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      scrollToFirstError
    >
      {/* Country name */}

      <Form.Item
        label="Country name"
        name="CountryName"
        className={classes.customInput}
        rules={validationRules.countryName}
      >
        <Input id="CountryName" type="text" />
      </Form.Item>
      {/* Capital name */}
      <Form.Item
        className={classes.customInput}
        label="Capital name"
        name="capital"
        rules={validationRules.capitalName}
      >
        <Input id="capital" type="text" />
      </Form.Item>
      {/* country Flag Url */}
      <Form.Item
        className={classes.customInput}
        label="Country Flag Url"
        name="countryFlag"
        rules={validationRules.countryFlag}
      >
        <Input id="countryFlag" type="url" />
      </Form.Item>
      {/* region*/}
      <Form.Item
        className={classes.customInput}
        label="Region"
        name="region"
        rules={validationRules.regionValidation}
      >
        <Input type="text" id="region" />
      </Form.Item>
      {/* population No*/}
      <Form.Item
        className={classes.customInput}
        label="Population"
        name="population"
        rules={validationRules.populationValidation}
      >
        <Input type="number" id="population" />
      </Form.Item>
      {/* latitude position*/}
      <Form.Item
        className={classes.customInput}
        label="latitude -90,90"
        name="lat"
        rules={[
          ...validationRules.longitudeValidation,
          {
            message: "Please enter valid latitude value",
            validator: latitudeValidator,
          },
        ]}
      >
        <Input type="number" id="latitude" />
      </Form.Item>
      {/* longitude position*/}
      <Form.Item
        className={classes.customInput}
        label="longitude -180,180"
        name="lng"
        rules={[
          ...validationRules.longitudeValidation,
          {
            message: "Please enter valid longitude value",
            validator: longitudeValidator,
          },
        ]}
      >
        <Input type="number" id="longitude" />
      </Form.Item>
      <Form.Item className={classes.submitBtnWrap}>
        {countriesError && <Alert message={countriesError} type="error" />}
        <CustomButton type="primary" htmlType="submit">
          Submit
        </CustomButton>
      </Form.Item>
    </Form>
  );
};

export default CountryForm;
