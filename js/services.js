(function(angular){
	var app=angular.module("service",[])
	app.service("myservice",["$window",function($window){
		var str=$window.localStorage.getItem("mytodos") || "[]"
		 //console.log(str)
		 var datas=JSON.parse(str)
		 // console.log(datas)
		this.get=function(){
			return datas
		}
		// 添加数据
		    this.add=function(newTar){
			datas.push({
				id:Math.random(),
				name:newTar,
				completed:false
			})
			// 存储数据
			this.save()
		}
		// 删除任务
		this.delete=function(id){
				for(var i=0;i<datas.length;i++) {
					var temp=datas[i]
					if(temp.id===id) {
						datas.splice(i,1)
						this.save()
						return
					}
				}

			}
			this.save=function() {
				var str=JSON.stringify(datas)
			    $window.localStorage.setItem("mytodos",str)

			}
			this.toggleAll=function(selectAll) {
				for(var i=0;i<datas.length;i++) {
					var temp=datas[i]
					temp.completed=selectAll
					
				}
				this.save()
			}
			// 显示未完成的任务
			this.noTarget=function(){
				var count=0
				for(var i=0;i<datas.length;i++) {
					var temp=datas[i]
					if(!temp.completed) {
						count++
					}

				}
				return count
			}
			// 清除所有已完成的任务
			this.clearTarget=function(){
				for(var i=datas.length-1;i>=0;i--) {
        		var temp=datas[i]
        		if(temp.completed) {
        			datas.splice(i,1)
        		}
        	}
        	this.save()
			}

	}])

})(angular)