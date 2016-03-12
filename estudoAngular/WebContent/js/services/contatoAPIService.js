//criando um servico para ser usado nos controllers da aplicacao
angular.module("listaTelefonica").factory("contatosAPI", function($http, config) {
	var _getContatos = function() {
		return $http.get(config.baseURL+"/contato.resource");
	}
	
	var _saveContato = function(contato) {
		return $http.post(config.baseURL+"/contato.resource", contato);
	}
	
	return {
		getContatos : _getContatos,
		saveContato : _saveContato
	};
	
});