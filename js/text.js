(function(angular) {
	'use strict';
	var app=angular.module("myApp",["service"])
	app.controller("demoController",([
		"$scope",
		"$log",
		"$location",
		"myservice",
		function($scope,$log,$location,myservice){
			$scope.datas=myservice.get()
			$scope.newTar=""
			$scope.add=function(){
				if(!$scope.newTar) {
				return
			 }
			 myservice.add($scope.newTar)
			 $scope.newTar=""
			}	

			// 删除任务
			$scope.delete=function(id){
				myservice.delete(id)

			}
			// 修改任务内容
			$scope.isEditId=0
			$scope.edit=function(id){
				$scope.isEditId=id
			}
			$scope.save=function(){
				$scope.isEditId=0
				myservice.save()
			}
			// 切换任务完成与否
			$scope.selectAll=false
			$scope.toggleAll=function(){
				myservice.toggleAll($scope.selectAll)
			}
			// 显示未完成的任务
			$scope.noTarget=function(){
				return myservice.noTarget()
			}
        // 清除所有已完成的任务
        $scope.clearTarget=function(){
        	myservice.clearTarget()
        }
        // 切换不同状态任务的显示
        $scope.isCompleted={}
        // 显示未完成的任务
        $scope.active=function(){
        	$scope.isCompleted={completed:false}
        }
        // 显示已完成的任务
        $scope.completed=function(){
        	$scope.isCompleted={completed:true}
        }
        $scope.all=function(){
        	$scope.isCompleted={}
        }
	}]))

})(angular)