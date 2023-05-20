var modifiedHeaders = $request.headers;

modifiedHeaders['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) EdgiOS/113.0.1774.42 Version/14.0 Mobile/15E148 Safari/604.1';



$done({headers : modifiedHeaders});
