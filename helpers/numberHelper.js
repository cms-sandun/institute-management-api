class NumberHelper{

    generateRandomNumber(maxNumber){
        return Math.floor(Math.random() * maxNumber)
    }

}

const numberHelper = new NumberHelper();
export default numberHelper;
