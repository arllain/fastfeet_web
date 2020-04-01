import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { MdNavigateBefore, MdCheck } from 'react-icons/md';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import CustomButton from '~/components/CustomButton';
import CustomInput from '~/components/CustomInput';
import AsyncSelectInput from '~/components/AsyncSelectInput';
import colors from '~/styles/colors';

import FormHeader from '~/components/FormHeader';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, UnForm } from './styles';

export default function DeliveryForm({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);

  useEffect(() => {
    async function loadInitialData(deliveryId) {
      if (id) {
        const response = await api.get(`/delivery/${deliveryId}`);

        formRef.current.setData(response.data);
        formRef.current.setFieldValue('recipient_id', {
          value: response.data.recipient.id,
          label: response.data.recipient.name,
        });
        formRef.current.setFieldValue('deliveryman_id', {
          value: response.data.deliveryman.id,
          label: response.data.deliveryman.name,
        });

        formRef.current.setFieldValue('product', response.data.product.name);
      }
    }
    loadInitialData(id);
  }, [id]);

  const customStylesSelectInput = {
    control: provided => ({
      ...provided,
      height: 45,
    }),
  };

  async function loadRecipientOptions(inputValue, callback) {
    const response = await api.get('/recipients', {
      params: {
        q: inputValue,
      },
    });

    const data = response.data.map(recipient => ({
      value: recipient.id,
      label: recipient.name,
    }));

    callback(data);
  }

  async function loadDeliverymenOptrios(inputValue, callback) {
    const response = await api.get('/deliveryman', {
      params: {
        q: inputValue,
      },
    });

    const data = response.data.map(deliveryman => ({
      value: deliveryman.id,
      label: deliveryman.name,
    }));

    callback(data);
  }

  async function handleSubmit(data, { reset }) {
    formRef.current.setErrors({});
    try {
      const schema = Yup.object().shape({
        product: Yup.string().required('Product name is required'),
        recipient_id: Yup.string().required('Recipient is required'),
        deliveryman_id: Yup.string().required('Deliveryman is required'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (!id) {
        const response = await api.post('/products', {
          name: data.product,
        });

        const delivery = {
          recipient_id: data.recipient_id,
          deliveryman_id: data.deliveryman_id,
          product_id: response.data.id,
        };
        await api.post('/delivery', delivery);
        toast.success('Delivery registered successfully!');
      } else {
        await api.put(`/delivery/${id}`, {
          recipient_id: data.recipient_id,
          deliveryman_id: data.deliveryman_id,
          product_id: data.product.id,
        });
        history.push('/deliveries');
        toast.success('Delivery updated successfully!');
      }

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  function handleBackNavigate() {
    history.push('/deliveries');
  }

  return (
    <Container>
      <Content>
        <FormHeader title={id ? 'Update Delivery' : 'Add Delivery'}>
          <CustomButton
            type="button"
            width="112px"
            height="36px"
            onClick={handleBackNavigate}
            isBackButton
          >
            <MdNavigateBefore size={30} color={colors.light} />
            Back
          </CustomButton>
          <CustomButton
            type="submit"
            width="112px"
            height="36px"
            onClick={() => formRef.current.submitForm()}
          >
            <MdCheck size={30} color={colors.light} />
            Save
          </CustomButton>
        </FormHeader>

        <UnForm ref={formRef} onSubmit={handleSubmit}>
          <section>
            <AsyncSelectInput
              type="text"
              label="Recipient"
              name="recipient_id"
              placeholder="Type to find a Recipient"
              noOptionsMessage={() => 'No recipient found'}
              loadOptions={loadRecipientOptions}
              styles={customStylesSelectInput}
            />
            <AsyncSelectInput
              type="text"
              label="Deliveryman"
              name="deliveryman_id"
              placeholder="Type to find a deliveryman"
              noOptionsMessage={() => 'No deliveryman found'}
              loadOptions={loadDeliverymenOptrios}
              styles={customStylesSelectInput}
            />
          </section>
          <CustomInput
            name="product"
            placeholder="product name"
            label="Product"
          />
        </UnForm>
      </Content>
    </Container>
  );
}
