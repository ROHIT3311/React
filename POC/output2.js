const obj = {
	userName:"Rohit",
	fn : function() {
		let name = "AAA";
		console.log(this.userName);
		 function inner(){
			console.log(this.userName);
		}
		inner();		 
	},
	innerObj:{
		fn2 : function(){
			console.log(this.userName);
		}
	}
}
obj.innerObj.fn2();
