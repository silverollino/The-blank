import Route from '@ember/routing/route';
import Ember from 'ember';
import sweetAlert from 'ember-sweetalert';
import RSVP from 'rsvp';

export default Route.extend({
    store: Ember.inject.service("store"),

    model() {
        return RSVP.hash({
           cuartos: this.get('store').findAll('cuarto')
        });
        
    },

    actions: {
        newRoom(rname) {
            
        //     let arreglo = this.store.findAll('cuarto').then(data => {
        //         let result = [];
        //         data.forEach(element => {
        //             let record = element.get('data');
        //             record.id = element.get('id');
        //             result.push(record);
        //         });
        //         console.log(result);
        //         this.set('arreglo', result);
        //     })
        //     console.log(arreglo);
        //    console.log(this.get(result))
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
            else {
                // let repetido = this.store.query('cuarto', {
                //         orderBy: 'roomCode',
                //         equalTo: rname
                //     });

                // let room = this.get("store").createRecord('cuarto', {});
                // room.set("roomCode", rname);

                // if (repetido.lenght >= 1) {
                //     sweetAlert({
                //         type: 'error',
                //         title: 'Ya existe',
                //         text: 'Este codigo ya existe usa otro',
                //         showConfirmButton: false,
                //         timer: 2500
                //     });
                //     return;
                // } else {
                    //Inicializamos el modelo

                    //Validamos que se haya introducido un codigo de cuarto                    
                    room.save().then(() => {

                        sweetAlert({
                            type: 'success',
                            title: 'Se ha creado un cuarto con el nombre: ' + room.get("roomCode"),
                            showConfirmButton: false,
                            timer: 3000
                        });
                        this.set("roomCreated", true);
                    });
                //}

            }
        }
    },
});

