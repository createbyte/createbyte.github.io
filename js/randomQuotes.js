		function loadJSONData(){
			//specify where we will be getting data from
			var JDFrom = "https://talaikis.com/api/quotes/random/";
			// now make a http conection request to the remote server from where we are getting the above data in this case talaikis
			//XMLHttpRequest is an API in the form of an object whose methods transfer data between a web browser and a web server. The object is provided by the browser's JavaScript environment. 
			var httpReq = new XMLHttpRequest();
			try{
				httpReq = new XMLHttpRequest();
			}catch(e){
				alert("your browser broke");
			}
			// so httpReq is our instance of the xmlhttpRequest using our instance we will make a connection request later on

		
		httpReq.open("GET",JDFrom,true);
		//open(method,url,async,uname,pswd)	Specifies the type of request, the URL, if the request should be handled asynchronously or not, and other optional attributes of a request 

		/*method: the type of request: GET or POST
		url: the location of the file on the server
		async: true (asynchronous) or false (synchronous)*/
		// use get for small and fast data transmission
		//used post if you have large amount of data usually is sloweer than get
		httpReq.send();
		//Sends the request off to the server.


		httpReq.onreadystatechange = function(){
			//onreadystatechange is the property of the httpReq xmlhttprequest.Stores a function (or the name of a function) to be called automatically each time the readyState property changes
			if (httpReq.readyState==4) {
				//readState == 4 means request finished and response received so now we can get the data in the form of JS object
				//so we use .parse function to change JSON data which is basically a text string to JS obj
				var JSObj = JSON.parse(httpReq.responseText);
				//responseText is a property of xmlhttprequest which returns json
				//alert(httpReq.responseText);
				document.getElementById('JSONdata').innerHTML = JSObj.quote;
			}


		}
		}