function algorithmBlock(listBlock, heightBlock, widthBlock, TOP = 0) {
    let areaBlock = heightBlock * widthBlock;
    let FinalPosition = [];

    let sortBlock = listBlock.slice().sort((a, b) => a.height * a.width - b.height * b.width);

    let areaFilled = 0;

    let position = [{
        top: TOP,
        left: 0,
        right: widthBlock,
        bottom: heightBlock
    }];

    for (let block of sortBlock) {
        let width = block.width;
        let height = block.height;

        position.forEach((keys) => {
            let subtractionWidth = keys.right - keys.left;
            let subtractionHeight = keys.bottom - keys.top;

            if (subtractionWidth >= width && subtractionHeight >= height) {
                let top = keys.top;
                let left = keys.left;
                let bottom = top + height;
                let right = left + width;

               
                for (let existingBlock of FinalPosition) {
                    if (!(right <= existingBlock.left || left >= existingBlock.right ||
                        bottom <= existingBlock.top || top >= existingBlock.bottom)) {
                        
                        left = existingBlock.right;
                        right = left + width;
                    }
                }

               

                let currentBlock = { top, left, bottom, right, initialOrder: listBlock.indexOf(block) + 0 };

            

                FinalPosition.push(currentBlock);

                if (width > subtractionWidth && height > subtractionHeight) {
                
                    position.push({ top: keys.top, left: right, right: keys.right, bottom: keys.bottom });
                }

                areaFilled = areaFilled + (width * height);
                areaBlock = areaBlock - (width * height);
            }
        });
    }

    let result = areaFilled / (heightBlock * widthBlock);

    return { result, FinalPosition };
}
