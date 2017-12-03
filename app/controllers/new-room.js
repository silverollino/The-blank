import Controller from '@ember/controller';
import Ember from 'ember';
//import sweetAlert from 'ember-sweetalert';
import { debug } from '@ember/debug';
//import FindQuery from 'ember-emberfire-find-query/mixins/find-query';

//window.EmberENV = window.EmberENV || {};
//window.EmberENV.ENABLE_DS_FILTER = true;

export default Controller.extend({
    store: Ember.inject.service("store"),
    
});
