document.querySelector('#searchUser').addEventListener("keyup", function(e) {
    let username = e.target.value;
    let userurl = ('https://api.github.com/users/'+username);
    const id = ('97b26d4e8ed886bd89fa');
    const secret = ('f5ebe96125addf1d85c64d0c72f810011da3401f');
   
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   headers.append('Accept', 'application/json');
   headers.append('Authorization', 'Basic ' + base64.encode(userurl + ":" +  id + ":" + secret));
   headers.append('Origin','http://localhost:3000');
   let query = (userurl, id, secret)
   fetch(query,  {
   headers: headers
   },
   {
   body: JSON.stringify({
   name: username
   })
   })
   .then(res => {
   return res.json()
   })
   .then(data => console.log(data))
   .catch(err => console.log(err))
   })
   