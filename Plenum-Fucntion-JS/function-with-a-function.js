function functionwithFunctionParameter (functionParameter) {
    console.log(functionParameter());
}

function anotherfunction() {
    return "hallo wlet";
}

functionwithFunctionParameter(anotherfunction);