import { useEffect, useState } from "react";
import Container from "../Container";
import { Table, Button, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import CountryFlag from "../CountryFlag/index";
import {
  getCountriesState,
  getCountriesLoading,
} from "../../redux/selectors/countries";
import { setError, setSuccess } from "../../redux/slices/countriesSlice";
import { getCountries } from "../../redux/actions/countriesActions";
import CustomButton from "../CustomButton";
import PositionMap from "../LocationMap";
import ModalComponent from "../Modal";
import CountryForm from "../CountryForm";
import "./styles.scss";

const CountriesTable = () => {
  const dispatch = useDispatch();
  const countries = useSelector(getCountriesState);
  const loading = useSelector(getCountriesLoading);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMapModalVisible, setIsMapModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [countryData, setCountryData] = useState({});
  const [position, setPosition] = useState({});
  const [countryName, setCountryName] = useState("");
  const [title, setTitle] = useState("");
  const [form] = Form.useForm();

  // handle edit and add country modal form
  const handleClose = () => {
    dispatch(setError(""));
    setIsModalVisible(false);
    form.resetFields();
    dispatch(setSuccess(false));
  };

  // handle close location map form
  const handleCloseMapModal = () => {
    setIsMapModalVisible(false);
  };

  // table column data
  const columns = [
    {
      title: "Country name",
      dataIndex: "name",
      key: "name",
      render: (name) => <p>{name?.common}</p>,
    },
    {
      title: "Capital",
      dataIndex: "capital",
      key: "capital",
      render: (capital) => <p>{capital?.[0]}</p>,
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
    },
    {
      title: "Country flag",
      dataIndex: "flags",
      key: "flags",
      render: (flags, obj) => (
        <CountryFlag src={flags?.svg} alt={obj?.name?.common} />
      ),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "position",
      dataIndex: "latlng",
      key: "latlng",
      render: (latlng, record) => (
        <Button
          onClick={() => {
            setPosition({
              lat: latlng?.[0],
              lng: latlng?.[1],
            });
            // set country name to use it in map InfoWindow
            setCountryName(record?.name?.common);
            // closing other modals before open map modal
            setIsModalVisible(false);
            setIsMapModalVisible(true);
          }}
          type="link"
        >
          View on map
        </Button>
      ),
    },
    {
      title: "Edit",
      key: "edit",
      render: (_, record) => (
        <Button
          onClick={() => {
            setIsEdit(true);
            setCountryData(record);
            setIsModalVisible(true);
            setTitle("Edit Country");
          }}
          type="link"
        >
          Edit
        </Button>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  return (
    <Container>
      <div className="add-btn-cont">
        <CustomButton
          type="primary"
          onClick={() => {
            setIsModalVisible(true);
            setIsEdit(false);
            setTitle("Add Country");
          }}
        >
          Add Country
        </CustomButton>
      </div>
      {/* map modal component */}
      <ModalComponent
        isModalVisible={isMapModalVisible}
        handleOk={handleCloseMapModal}
        handleCancel={handleCloseMapModal}
        title="Position Map"
        className="map-modal"
      >
        <PositionMap position={position} countryName={countryName} />
      </ModalComponent>
      {/* form modal component */}
      <ModalComponent
        isModalVisible={isModalVisible}
        handleOk={handleClose}
        handleCancel={handleClose}
        title={title}
      >
        <CountryForm
          form={form}
          isEdit={isEdit}
          data={countryData}
          handleClose={handleClose}
        />
      </ModalComponent>
      {/* countries Table */}
      <Table
        className="countries-table"
        columns={columns}
        dataSource={countries}
        loading={loading}
        bordered
        scroll={{ x: true }}
      />
    </Container>
  );
};

export default CountriesTable;
