function quotes() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data;
      })
      .then(function(data) {
        console.log('data decoded from JSON:', data);
  
        const simpsonsHtml = `
          <p><strong>${data[0].quote}</strong></p>
          <p>"${data[0].character}"</p>
          <img src="${data[0].image}" alt="${data[0].character}"/>
        `;
        document.querySelector('.content').innerHTML = simpsonsHtml;
      });
  }
  
  quotes();


