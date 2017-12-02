import DS from 'ember-data';

export default DS.Model.extend({
    nombre: DS.attr("string"),
    score: DS.attr("number"),
    isHost: DS.attr("boolean"),
    resSelec: DS.attr("string"),

    cuarto: DS.belongsTo("cuarto"),
    respuesta: DS.belongsTo("respuesta")

});
