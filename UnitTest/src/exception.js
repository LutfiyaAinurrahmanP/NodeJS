export class myException extends Error {

}
export const callMe = (name) => {
    if(name === "Lutfiya"){
        throw new myException("Ups mu exception happends");
    }
    else{
        return "OK";
    }
}