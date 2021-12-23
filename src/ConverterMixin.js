export const ConverterMixin = {
    data() {
        return {
            kg_value: 0,
            cm_value: 0
        };
    },
    computed: {
        to_pounds: function () {
            return this.kg_value * 2.20462;
        },
        to_inches: function () {
            return this.cm_value * 0.393701;
        }
    }
}