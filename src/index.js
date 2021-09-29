const getUrlPromesa = () => {
    const promesa = new Promise((resolve) => {
        resolve('https://google.com.co');
    });

    return promesa;
};

getUrlPromesa().then(console.log);


// async se puede utilizar solo 
// con el fin de convertir la funcion en una promesa
const getUrl = async () => {
    return 'https://google.com.com';
};

getUrl().then(console.log);


// const getImagen = async () => {
//     const apiKey = 'dqovj0uMHqgwLjOPXm9upJU7xdU7SxFW';
//     const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//     const { data } = await respuesta.json();
//     const { url } = data.images.original;

//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append(img);
// };


const getImagen = async () => {
    try {
        const apiKey = 'dqovj0uMHqgwLjOPXm9upJU7xdU7SxFW';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await respuesta.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        console.log(error);
    }
};

getImagen();