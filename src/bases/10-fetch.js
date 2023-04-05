const apiKey = 'bu7WEF9trqzmxwWQygW1Mh70nRKi3ehg';
// https://api.giphy.com/v1/gifs/random?apiKey=bu7WEF9trqzmxwWQygW1Mh70nRKi3ehg

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then( resp => resp.json())
.then(({data})=>{
      const {url}=data.images.original;
    //   console.log(url);
          const img = document.createElement('img');
          img.src=url;
          document.body.append(img);
})
.catch(console.warn)
