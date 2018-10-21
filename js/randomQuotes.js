		function loadJSONData(){
			var JDFrom = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
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
					document.getElementById('JSONdata').innerHTML = JSObj.quoteText;
				}


			}
		}