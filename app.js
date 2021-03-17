//Need to connect with github server and fatch the data by using
window
  .fetch("https://api.github.com/users")
  .then(data => {
    //convert buffer data to json
    data
      .json()
      .then(info => {
        let output = [];
        for (let user of info) {
          output += `
                <section>
                    <article>
                        <img src=${user.avatar_url}/>
                        <h1>${user.login}</h1>
                        <p><a href=${user.html_url} target="_blank">Check profile</a></p>
                    </article>
                </section>
              `;
        }
        document.getElementById("template").innerHTML = output;
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
