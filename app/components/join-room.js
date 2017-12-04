import Component from '@ember/component';
import Ember from 'ember';
export default Component.extend({
    store: Ember.inject.service("store"),
    routing: Ember.inject.service('-routing'),
    
    actions: {
        chkRoom(rname, model) {

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
                this.set('isValid',true);
                return;
            }            
        },

        addPlayer(playerName, rname, model){
            
            let player = this.get("store").createRecord('jugador', {
                nombre: this.get("playerName"),
                cuarto: this.get('cuarto')
            });
            
            var currentRooms = model.cuartos.content; //Obtenemos el arreglos con datos a leer         
            var repetido;
            var roomIdd;
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
                    roomIdd = i;                   
                    break;
                }
            }

            player.save();
            this.get('routing').transitionTo('game-room', roomIdd)
            //this.set('roomId', currentRooms[roomIdd].id);
            document.getElementById("roomId").value = currentRooms[roomIdd].id;
        }
    }
});
