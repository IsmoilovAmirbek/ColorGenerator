let content = document.querySelector('.content')
// let url = 'https://images5.alphacoders.com/708/708611.jpg'

// function addBox() {
//     let div = document.createElement('div')
//     let img = document.createElement('img')

//     img.setAttribute('src', url)

//     div.innerHTML = '<h1>Hello</h1>'
//     div.prepend(img)
//     content.prepend(div)
// }

// addBox()

 let imgs = [
 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg',
  'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrX2ZqJwe9FKAFR8w24Oync6XJmYhefucmgg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbiVefWBj4bikZ4cdIineBmeu1dfHBIbLZw&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FPuIeLCT19y2GV0_t_0TJVP4cSvYxJbiUA&usqp=CAU',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmWnKU-mI61ep42kxrsGxNMFKPMnyseY8lQ&usqp=CAU'
 ]

let addDiv = document.querySelector('#addDiv')
let addImg = document.querySelector('#addImg')

// function addBox() {

// }

    // addDiv.addEventListener('click', () => {
    //     let div = document.createElement('div')
    //     div.innerHTML = '<h1>1</h1>'
    //     content.append(div)
    //     div.classList.add('div')
    // })

    // addImg.addEventListener('click', () => {    
        
    //     let rnd = Math.round(Math.random() * imgs.length)
    //     // let img = document.createElement('img')
    //     img.setAttribute('src', imgs)
    //     content.append(imgs)
    //     // div.classList.add('img')
    //     console.log('click');
    // })



    addImg.addEventListener('click',  () => {
        let rnd = Math.round(Math.random() * imgs.length)
        rndImg(rnd, imgs)
    })

    function rndImg(r, i) {
        let img = document.createElement('img')
        img.setAttribute('src', i[r])
        content.append(img)
    }

    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        content.style.backgroundColor = "#" + randomColor;
        color.innerHTML = "#" + randomColor;
      }
      
      addDiv.addEventListener("click", setBg);
      setBg();
