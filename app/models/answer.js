import DS from 'ember-data';

export default DS.Model.extend({
    txtRespuesta: DS.attr("string"),
    
        jugador: DS.belongsTo("jugador"),
        answer: DS.belongsTo("answer")
});
