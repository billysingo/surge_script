let body = JSON.parse($response.body);
body['reportList'][1]['checkTime']=new Date(Date.now()-81400000).toLocaleString();
body['reportList'][1]['collectTime']=new Date(Date.now()-86400000).toLocaleString();
console.log('change hs detail  done!');
$done({body: JSON.stringify(body)});