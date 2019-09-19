"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var nombre = "JC";
var apellidos = "RT";

var nombreCompleto = function nombreCompleto() {
  return nombre + " " + apellidos;
};

var cambio = 3.15;
nombre = "juan";
apellido = "ramos";
edad = 20;

function sumar() {
  for (var _len = arguments.length, valores = new Array(_len), _key = 0; _key < _len; _key++) {
    valores[_key] = arguments[_key];
  }

  for (var valor in valores) {
    console.log(valor);
  }
}

var url = "";
fetch(url).then(function () {}).then(function () {});

var Persona =
/*#__PURE__*/
function () {
  function Persona(valor1) {
    _classCallCheck(this, Persona);

    this.nombre = valor1;
  }

  _createClass(Persona, [{
    key: "nombreCompleto",
    value: function nombreCompleto() {}
  }]);

  return Persona;
}();