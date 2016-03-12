angular.module("listaTelefonica").directive("uiDate", function ($filter) {
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ctrl) {
			var _formatDate = function (date) {
				date = date.replace(/[^0-9]+/g, "");
				if(date.length > 2) {
					date = date.substring(0,2) + "/" + date.substring(2);
				}
				if(date.length > 5) {
					date = date.substring(0,5) + "/" + date.substring(5,9);
				}
				return date;
			};

			//vincula ao evento keyup do dom
			element.bind("keyup", function () {
				console.log("evento keyup");
				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
				ctrl.$render();
			});

			//é um intecepter antes atribuir o valor ele chama essa função 
			ctrl.$parsers.push(function (value) {
				console.log("intercepter: ctrl.$parsers.push "+value);
				if (value.length === 10) {
					var dateArray = value.split("/");
					return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
				}
			});

			//tambem um intecpter
			ctrl.$formatters.push(function (value) {
				console.log("intercepter: ctrl.$formatters.push "+value);
				return $filter("date")(value, "dd/MM/yyyy");
			});
		}
	};
});