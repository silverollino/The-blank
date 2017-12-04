import Controller from '@ember/controller';
import Ember from 'ember';
//import sweetAlert from 'ember-sweetalert';
import { debug } from '@ember/debug';
//import FindQuery from 'ember-emberfire-find-query/mixins/find-query';

//window.EmberENV = window.EmberENV || {};
//window.EmberENV.ENABLE_DS_FILTER = true;

export default Controller.extend({
    store: Ember.inject.service("store"),

    actions: {
        newRoom(rname, model) {
            //Obtenemos el modelo con el parametro "model" para asi poder leer los datos que tiene dentro

            //Validamos que se haya introducido un codigo de cuarto
            if (Ember.isBlank(rname)) {
                sweetAlert({
                    type: 'error',
                    title: 'No puede dejar en blanco el Codigo de cuarto',
                    showConfirmButton: false,
                    timer: 2000
                });
                return;
            }

            //Si no se dejo en blanco entonces
            let room = this.get("store").createRecord('cuarto', {});
            room.set("roomCode", rname);

            var currentRooms = model.cuartos.content; //Obtenemos el arreglos con datos a leer         
            var repetido;
            var seRepitio = false;

            //Obteniendo el tamaño del arreglo
            if (typeof (currentRooms) == "undefined" || typeof (currentRooms) == "string" || typeof (currentRooms) == "number") {
                return repetido = 0;
            } else {
                repetido = currentRooms.length;
            }
            
            //Checamos cada entrada del arreglo para ver si existe un cuarto con ese nombre
            for (let i = 0; i < repetido; i++) {
                
                let romName = currentRooms[i]._data.roomCode;
                if (romName == rname) {                    
                    seRepitio = true;                    
                    break;
                }
            }
            
            //SI en efecto existe un cuarto con el nombre regresamos
            if (seRepitio) {
                sweetAlert({
                    type: 'error',
                    title: 'Ya existe',
                    text: 'Este codigo ya existe usa otro',
                    showConfirmButton: false,
                    timer: 2500
                });
                return;
            } else {

                //Si no existe un cuarto con ese numero salvamos en la BD              
                room.save().then(() => {
                    this.set("roomCreated", true);
                    sweetAlert({
                        type: 'success',
                        title: 'Se ha creado un cuarto con el nombre: ' + room.get("roomCode"),
                        showConfirmButton: false,
                        timer: 3000
                    });
                    
                });
            }
        }
    },
    
});
