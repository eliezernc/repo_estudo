//Outro exemplo de criação de servicos
angular.module("listaTelefonica").service("operadorasAPI", function($http, config) {
	this.getOperadoras = function() {
		return $http.get(config.baseURL+"/operadora.resource");
	}
});