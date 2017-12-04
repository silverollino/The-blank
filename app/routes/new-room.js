import Route from '@ember/routing/route';
import Ember from 'ember';
import sweetAlert from 'ember-sweetalert';
import RSVP from 'rsvp';
import { debug } from '@ember/debug';

export default Route.extend({
    store: Ember.inject.service("store"),

    model() {
        return RSVP.hash({
            cuartos: this.get('store').findAll('cuarto')
        });
    },
});

