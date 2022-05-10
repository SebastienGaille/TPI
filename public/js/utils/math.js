export function getRandomInt(min,max){
    min=Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() *(max-min+1))+min;
}

export function getRandomSpeed(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let total =Math.floor(Math.random() * (max - min)) + min
    return total/10;
  }

export function getRandomQuestionInTime(min,max){
    min=Math.ceil(min);
    max = Math.floor(max);
    let total=Math.floor(Math.random() *(max-min+1))+min;
    return total *1000;
}

export function getRandomQuestionId(min,max){
    min=Math.ceil(min);
    max = Math.floor(max);
    let total=Math.floor(Math.random() *(max-min+1))+min;
    return total;
}

