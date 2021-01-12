		function loadJSONData(){
			var JDFrom = "https://geek-jokes.sameerkumar.website/api";
			var httpReq = new XMLHttpRequest();
			try{
				httpReq = new XMLHttpRequest();
			}catch(e){
				alert("your browser broke");
			}
		
		httpReq.open("GET",JDFrom,true);
		httpReq.send();


			httpReq.onreadystatechange = function(){
					if (httpReq.readyState==4) {
					var JSObj = JSON.parse(httpReq.responseText);
					document.getElementById('JSONdata').innerHTML = JSObj.quote;
					document.getElementById('AuthorName').innerHTML = JSObj.author;
				}


			}
		}