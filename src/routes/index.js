import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '~/pages/SignIn';
import Deliveries from '~/pages/Deliveries';
import DeliveryMen from '~/pages/DeliveryMen';
import Problems from '~/pages/Problems';
import Recipients from '~/pages/Recipients';
import DeliverymanForm from '~/pages/DeliveryMen/Form';
import RecipientForm from '~/pages/Recipients/Form';
import DeliveryForm from '~/pages/Deliveries/Form';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliveries" component={Deliveries} isPrivate />
      <Route path="/delivery/add" component={DeliveryForm} isPrivate />
      <Route path="/delivery/edit/:id" component={DeliveryForm} isPrivate />

      <Route path="/deliverymen" component={DeliveryMen} isPrivate />
      <Route path="/deliveryman/add" component={DeliverymanForm} isPrivate />
      <Route
        path="/deliveryman/edit/:id"
        component={DeliverymanForm}
        isPrivate
      />

      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/recipient/add" component={RecipientForm} isPrivate />
      <Route path="/recipient/edit/:id" component={RecipientForm} isPrivate />

      <Route path="/problems" component={Problems} isPrivate />
    </Switch>
  );
}
