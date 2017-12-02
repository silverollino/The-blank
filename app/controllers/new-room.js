import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    store: Ember.inject.service("store"),
    actions:{
        newRoom(){
            //Inicializamos el modelo
            let room = this.get("store").createRecord('cuarto',{});

            room.set("roomCode", this.get("roomName"));
            //Validamos que se haya introducido un codigo de cuarto
            if(Ember.isBlank(room.get("roomCode"))){
                alert("Debe de introducir un codigo de cuarto antes de seguir");
                return;
            }

            room.save().then(()=>{
                alert("Cuarto NOMBRE ha sido creado ahora unete");
                this.set("roomCreated", true);
            });
        }
    }
});
