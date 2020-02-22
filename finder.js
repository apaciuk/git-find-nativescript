jQuery(document).ready(function($) {
  $('#searchUser').on('keyup', function(e){
    let username = e.target.value;

 // Make request to Github
    $.ajax({
      url:'https://api.github.com/users/'+username,
      data:{
        client_id:'97b26d4e8ed886bd89fa',
        client_secret:'f5ebe96125addf1d85c64d0c72f810011da3401f'
      }
    }).done(function(user){
      $.ajax({
        url:'https://api.github.com/users/'+username+'/repos',
        data:{
          client_id:'97b26d4e8ed886bd89fa',
          client_secret:'f5ebe96125addf1d85c64d0c72f810011da3401f',
          sort: 'created: asc',
          per_page: 30
        }
      }).done(function(repos){
        $.each(repos, function(index, repo){
          $('#repos').append(`
          <br />
          <h5 class="text-center;" style="text-transform: capitalize;"><strong>${repo.name}:</strong> ${repo.description}</h5>
               <br />
              <ul class="list-group">
               <li class="list-group-item d-flex justify-content-between align-items-center">Forks: ${repo.forks_count}</li>
               <li class="list-group-item d-flex justify-content-between align-items-center">Watchers: ${repo.watchers_count}</li>
               <li class="list-group-item d-flex justify-content-between align-items-center">Stars: ${repo.stargazers_count}</li>
                </div>
               <ul class="list-group">
               <br />
           <a href="${repo.html_url}" target="_blank" class="btn btn-lg btn-success">Repo Page</a>
         </ul>
    
          `);
        });
      });
      
      $('#profile').html(`
         <h2 class="text-center">${user.name}</h2>
         <img class="img-thumbnail rounded-circle mx-auto d-block" src="${user.avatar_url}">
         <br />
         <a href="${user.html_url}" target="_blank" class="btn btn-dark btn-lg btn-block">View Profile</a>
          <br /><br />
              <div class="column-md-12">
              <span class="badge badge-secondary"><strong>Public Repos:</strong> ${user.public_repos}</span>
              <span class="badge badge-primary"><strong>Public Gists:</strong> ${user.public_gists}</span>
              <span class="badge badge-success"><strong>Followers:</strong> ${user.followers}</span>
              <span class="badge badge-info"><strong>Following:</strong> ${user.following}</span>
              <br><br>
              <ul class="list-group">
             <li class="list-group-item d-flex justify-content-between align-items-center">Company: ${user.company}</li>
             <li class="list-group-item d-flex justify-content-between align-items-center">Website/blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
             <li class="list-group-item d-flex justify-content-between align-items-center">Location: ${user.location}</li>
             <li class="list-group-item d-flex justify-content-between align-items-center">Member Since: ${user.created_at}</li>
              </ul>
              </div>
              <br />
       <h3 class="text-center">Latest Repos</h3>
        
        <div id="repos"></div>
      `);
    });
  });
 });

