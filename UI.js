const mainResult = document.createElement('main');
mainResult.id = 'mainResult';
document.body.appendChild(mainResult);



function UI(properties) {

    let h2 = document.createElement('h2');
    h2.innerText = 'Fullness: ' + (properties.result * 100).toFixed(2) + '%';
    mainResult.appendChild(h2);

    let h3 = document.createElement('h3');
    h3.innerText = 'Result: ' + properties.result;
    mainResult.appendChild(h3);


    properties.FinalPosition.map(element => {
        let div = document.createElement('div');
        div.style.width = element.right - element.left + 'px';
        div.style.height = element.bottom - element.top + 'px';
        div.className = 'ContentBlock';

        const color = getRandomColor(properties.FinalPosition, element.initialOrder);
        div.style.backgroundColor = color;
        mainResult.appendChild(div);




        let count = document.createElement('div');
        count.innerHTML = `<mark>${element.initialOrder}</mark>`;
        div.appendChild(count);


    });

   
}


function getRandomColor(position, initialOrder) {
    const totalBlocks = position.length;
    const hue = (initialOrder * (360 / totalBlocks)) % 360;
    const saturation = 70;
    const lightness = 70;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}



function dataResult() {
    return new Promise((resolve, reject) => {
        let listBlock = [];
         if(listBlock){
            listBlock = [
                { width: 100, height: 210 },
                { width: 200, height: 40 },
                { width: 200, height: 50 },
                { width: 200, height: 110 },
                { width: 500, height: 210 },
                { width: 600, height: 610 },
                { width: 600, height: 210 },
               
            ];

            resolve(listBlock);
         }
         else{
            reject('Error data')
            
         }
           
      
    });
}

dataResult()
    .then(listBlock => {
        const result = algorithmBlock(listBlock, window.innerHeight, window.innerWidth);
        UI(result);

        
    console.log(result);

    console.log(result.FinalPosition);
    
    })
    .catch(error => {
        console.error(error);
    
    });


