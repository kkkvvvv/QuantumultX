var modifiedHeaders = $request.headers;

modifiedHeaders['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.8 Mobile/15E148 Safari/605.1.15 BingSapphire/1.0.410505003';



$done({headers : modifiedHeaders});
