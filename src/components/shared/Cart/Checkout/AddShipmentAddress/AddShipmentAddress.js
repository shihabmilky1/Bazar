import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '70%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        userSelect: 'none',
        zIndex: '100 !important',
        padding: '0',
        overflow: 'visible',
        background: '#F7F8F9'
    },
};
Modal.setAppElement('#root');

const AddShipmentAddress = ({ modalIsOpen, closeModal, onSubmit }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="close-icon" onClick={closeModal} >
                    <i className="fal fa-times"></i>
                </div>
                <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="py-3 text-center">Add New Address</h5>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                        className="form-control mt-3"
                        {...register("name", { required: true })}
                    />
                    {errors.title && <p className="mx-0">This field is required</p>}
                    <textarea
                        name="address"
                        placeholder="Enter Address"
                        id=""
                        cols="30"
                        rows="5"
                        className="form-control mt-3"
                        {...register("address", { required: true })}
                    ></textarea>
                    {errors.address && <p className="mx-0">This field is required</p>}
                    <input
                        placeholder="Phone Number"
                        name="phone"
                        type="number"
                        className="form-control mt-3"
                        {...register("phone", { required: true })}
                    />
                    {errors.phone && <p className="mx-0">This field is required</p>}
                    <div className="payment-button mt-4">
                        <button type="submit" className="btn w-100" >Save Address</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddShipmentAddress;