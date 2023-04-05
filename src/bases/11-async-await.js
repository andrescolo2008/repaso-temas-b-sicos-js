
const getImage=async ()=>{
    try {
        const apiKey = 'bu7WEF9trqzmxwWQygW1Mh70nRKi3ehg';
        // https://api.giphy.com/v1/gifs/random?apiKey=bu7WEF9trqzmxwWQygW1Mh70nRKi3ehg
        
        const resp =await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        const {data} = await resp.json();
    
        console.log(data);
    
        const {url}=data.images.original;
          console.log(url);
          
        
              const img = document.createElement('img');
              img.src=url;
              document.body.append(img);
        
    } catch (error) {
        console.error(error);
        
    }

    
}


 getImage();

