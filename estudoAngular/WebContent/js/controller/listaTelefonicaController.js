// localiza o modulo e cria um controller para esse modulo em questao, faz uma importação do http
angular.module("listaTelefonica").controller("listaTelefonicaController", function ($scope, contatosAPI, operadorasAPI, serialGenerator){
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];	    
	$scope.operadoras = [];
		 
	var carregarContatos = function(){
		contatosAPI.getContatos().success(function(data, status) {
			$scope.contatos = data["contato"];	
		});
	}
		 
	var carregarOperadoras = function() {
		operadorasAPI.getOperadoras().success(function(data, status) {
			$scope.operadoras = data["operadora"];
		});
	};
			
	$scope.adicionarContato = function (contato) {		
		console.log(serialGenerator.generate());
		
		contato.data = new Date();
		contato.cor = gerarCorAleatorio();
		contatosAPI.saveContato(contato).success(function(data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
				
			$scope.messageSuccess = "Contato Adicionado com Sucesso!";
		}).error(function(data, status){
				$scope.message = "Ocorreu um erro ao salvar Contato: "+data;
			});			
	}		

	$scope.deletarContato = function(contatos){
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) 
				return contato;
			});
	}

	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some( function(contato) { return contato.selecionado; } );
	};

	$scope.ordernarPor = function (campo) {
		$scope.ordenacao = campo;			
		$scope.direcao = !$scope.direcao;		

	};
					
	carregarContatos();
	carregarOperadoras();
});	


//Codigo para testes...

/*$scope.operadoras = [{nome: "Oi", codigo: 1, categoria: "Celular", preco: 2},
                     {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 3},
                     {nome: "Tim", codigo: 41, categoria: "Celular", preco: 4},
                     {nome: "Claro", codigo: 17, categoria: "Celular", preco: 6},
                     {nome: "Embratel", codigo: 17, categoria: "Fixo", preco: 5},
                     {nome: "GVT", codigo: 17, categoria: "Fixo", preco: 3}];*/

/* $scope.adicionarContato = function (contato) {
	//console.log($scope.nome); para imprimir no console
	$scope.contatos.push(angular.copy(contato));
	delete $scope.contato;
	$scope.contatoForm.$setPristine();
	
	}		 */

//console.log(temContato);
/* var temContato =  contatos.filter(function (contatos) {
									if (contato.selecionado)
										return true;							
								}); */