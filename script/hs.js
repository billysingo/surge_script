let body = JSON.parse($response.body);
body['res']['hs']['collectTime']=new Date(Date.now()-86400000).toLocaleString().replaceAll("/","-");
console.log('change collectTime to '+body['res']['hs']['collectTime']+' done!');
$done({body: JSON.stringify(body)});