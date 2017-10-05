const fs = require('fs');
const myObj = require('./1');

function objVerification(obj){
    let verifying = 0;
    let finalString = '';
    if(!(obj.flag !== true || obj.flag !== false)){
        verifying += 1;
    finalString += `Wrong key's 'flag' value: '${obj.flag}' - not a boolean\n`;
    }
    if(!Array.isArray(obj.myPromises)){
        verifying += 1;
        finalString += `Wrong key's 'myPromise' value: '${obj.myPromises}' - not an Array\n`;
    }
    if(!(typeof obj.element === "object")){
        verifying += 1;
        finalString += `Wrong key's 'element' value: '${obj.element}' - not an object\n`;
    }
    if(!(obj.screenshot === "null")){
        verifying += 1;
        finalString += `Wrong key's 'screenshot' value: '${obj.screenshot}' - not a null\n`;
    }
    if(!(typeof obj.elementText === "string")){
        verifying += 1;
        finalString += `Wrong key's 'elementText' value: '${obj.elementText}' - not a string\n`;
    }
    if(!(obj.allElementsText.split(" ").includes("const"))){
        verifying += 1;
        finalString += `Wrong key's 'allElementsText' value: '${obj.allElementsText}' - doesn't contain 'const'\n`;
    }
    if(!(obj.counter < 10)){
        verifying += 1;
        finalString += `Wrong key's 'counter' value: '${obj.counter}' - less than 10\n`;
    }
    if(!(obj.config === "Common")){
        verifying += 1;
        finalString += `Wrong key's 'config' value: '${obj.config}' - doesn't equal "Common"\n`;
    }
    if(!(obj.const.toLowerCase() === "first")){
        verifying += 1;
        finalString += `Wrong key's 'const' value: '${obj.const}' - doesn't equal "FiRst" (case insensitive)\n`;
    }
    if(!(obj.parameters.length === 8)){
        verifying += 1;
        finalString += `Wrong key's 'parameters' value: '${obj.parameters}' - length doesn't equal 8\n`;
    }
    if(!(obj.description.length > 5 && obj.description.length < 13)){
        verifying += 1;
        finalString += `Wrong key's 'description' value: '${obj.description}' - length is less than 5 or more than 13\n`;
    }
    if(verifying === 0){
        console.log("OK");
        return "";
    } else {
        return finalString;
    }
}

function fileWorker() {
    if(objVerification(myObj)){
        fs.writeFile("./WrongValuesFile.txt",objVerification(myObj), function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    }
}
fileWorker();
