let body = JSON.parse($response.body);
body['res']['hs']['collectTime']=new Date(Date.now()-86400000).toLocaleDateString().replaceAll("/","-")+" 23:"+parseInt(Math.random()*49+10)+":23";
console.log('change hs detail done!');
$done({body: JSON.stringify(body)});