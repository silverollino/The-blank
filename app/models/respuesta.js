import DS from 'ember-data';

export default DS.Model.extend({
    txtRespuesta: DS.attr("string"),

    jugador: DS.belongsTo("jugador"),
    pregunta: DS.belongsTo("pregunta")

});
