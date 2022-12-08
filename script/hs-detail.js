let body = JSON.parse($response.body);
body['res']['hs']['collectTime']=new Date(Date.now()-86400000).toLocaleString();
console.log('change hs detail done!');
$done({body: JSON.stringify(body)});