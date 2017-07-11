console.log("controller");
var appNSControllers = angular.module('appNSControllers', []);

appNSControllers.controller('selectionController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) { 
  $http.get('./makeModel.json').success(function(data) {
    $scope.makeModel = data;
	  $scope.makes=[];
	  $scope.models=[];
	  $scope.years=[];
	  $scope.types=[];
	  $scope.userList=[];
	  $scope.userWantList=[];
	  $scope.selectedModel;
	  $scope.selectedMake;
	  $scope.newItemAdded=true;
	  $scope.AddItemShouldShow=false;
	  $scope.UserWant;
	
	
	
	/*$scope.selectedmake="";*/
	console.log($scope.userList);

	  	  //this imports the types
var allTypes=[];
for(var i=0;i<$scope.makeModel.length;i++){
	allTypes.push($scope.makeModel[i].type);
}
	  $scope.types=unique(allTypes);
$scope.updateType=function(typeselected) {
	console.log(typeselected);
	$scope.thisType=typeselected;
	$scope.makes=[];


	for(i=0;i<$scope.makeModel.length;i++){
		
		if($scope.makeModel[i].type===typeselected)	{
			console.log($scope.makes);
			$scope.makes.push($scope.makeModel[i].make);
			}
$scope.makes=unique($scope.makes);
	  console.log($scope.makes);
			}
};
	  


	
function unique(someArray) {
    var o = {}, i, l = someArray.length, r = [];
    for(i=0; i<l;i+=1) {o[someArray[i]] = someArray[i];}
    for(i in o) {r.push(o[i]);}
    return r;
}

	  
//updates the models in the array
$scope.updateMake=function(makeselected) {
	console.log(makeselected);
	$scope.selectedMake=makeselected;
	$scope.models=[];
	
	
	for(i=0;i<$scope.makeModel.length;i++){
		
		if($scope.makeModel[i].make===makeselected)	{
			console.log($scope.models);
			$scope.models.push($scope.makeModel[i].model);
			}

			}
	$scope.models=unique($scope.models);
	
};


$scope.updateModel=function(modelSelected) {
	console.log(modelSelected);
	for(i=0;i<$scope.models.length;i++){
	console.log($scope.models[i]);
	if($scope.models[i]===modelSelected){
	console.log("yup");
	$scope.selectedModel=$scope.models[i];
		console.log($scope.selectedModel);
		$scope.AddItemShouldShow=true;
	break;
	}
		
}
};
 
	
	
	//this updates the user data
$scope.addItemTouserList=function() {
	console.log($scope.selectedModel);
	for(var i=0;i<$scope.makeModel.length;i++){
	if($scope.makeModel[i].model===$scope.selectedModel&&$scope.makeModel[i].make===$scope.selectedMake){
		$scope.userList.push($scope.makeModel[i]);
$scope.AddItemShouldShow=true;
		$scope.resetFormItems();
		break;
	}
		
}
	 };	
	  
	  
$scope.updateUserWant=function(userWant){
	$scope.userWant=userWant;
};	  
	  	//this updates the user data
$scope.addItemTouserWantList=function() {

		$scope.userWantList.push($scope.userWant);

	 };	


$scope.resetFormItems=function() {
	
	$scope.makes=[];
	$scope.models=[];
	$('#typeSelect option').prop('selected', function() {
        return this.defaultSelected;
    });
	
};	
	console.log($scope.userList);




  });
}]);



 



