let url = "https://jsonplaceholder.typicode.com/posts"
/*fetch(url)
	.then((res) => {
		return res.json()
	})
	.then(data => {
		console.log(data);
		console.log("user id : ",data.userId);
		console.log("title : ",data.title);
		console.log("body : ",data.body);
	})		
	.catch(err => {
		console.log(err);
	}); */

/* async function createPost(){
	let newPost = {
		title:"new post",
		body : "new Post body",
		userId : 2,
	};

	let res = await fetch(url,{
		method:"POST",
		headers:{
			"content-Type":"application/json"
		},
		body:JSON.stringify(newPost)
	});
	

	let data = await res.json();
	console.log(data);
}

createPost();

async function updatePost(){
	let updatedPost = {
		title:"updated Post",
		body:"updated body",
		userId:3,
	};

	let res = await fetch("https://jsonplaceholder.typicode.com/posts/2",{
		method:"PUT",
		headers:{
			"content-Type":"application/json"
		},
		body:JSON.stringify(updatedPost)
	});

	let data = await res.json();
	console.log(data);
}
updatePost();

async function updatePartially(){
	let updatedPost = {
		title: "Partially Updated"
	};
	
	let res = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
		method: "PATCH",
		headers: { 
			"content-type": "application/json"
		},
		body: JSON.stringify(updatedPost)
	});
	
	let data = await res.json();
	console.log(data);
}

updatePartially();

async function deletePost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        });

        if (response.ok) {
            console.log("Post deleted successfully!");
        } else {
            console.log("Failed to delete the post");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

deletePost(); */

axios.get("https://jsonplaceholder.typicode.com/posts")
.then((res)=>{
	console.log(res.data)
})
.catch((err)=>{
	console.log(err);
});

axios.post("https://jsonplaceholder.typicode.com/posts",{
	title:"Hello",
	body:"New Post",
	userId:2,
})
.then((res)=>{
	console.log(res.data);
})
.catch((err)=>{
	console.log(err);
});

axios.put("https://jsonplaceholder.typicode.com/posts/1",{
	title:"Hello",
	body:"New Post",
	userId:2,
})
.then((res)=>{
	console.log(res.data);
})
.catch((err)=>{
	console.log(err);
});

