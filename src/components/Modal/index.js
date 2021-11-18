import { Modal } from "antd";
import "./styles.scss";
const ModalComponent = ({
  isModalVisible,
  handleOk,
  handleCancel,
  children,
  title,
  ...otherProps
}) => {
  return (
    <Modal
      className="modal-comp"
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      {...otherProps}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
