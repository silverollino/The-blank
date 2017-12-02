import DS from 'ember-data';

export default DS.Model.extend({
    texto: DS.attr("string"),

    cuartos: DS.hasMany("cuarto"),
    respuestas: DS.hasMany("respuesta")
});
