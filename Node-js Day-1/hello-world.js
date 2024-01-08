require('http')
   .createServer((req,res) => res.end("Trust In God"))
   .listen(3000);

   console.log(`server listening on port 3000`);