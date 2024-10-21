export class myException extends Error {

}
export const callMe = (name) => {
    if(name === "Lutfiya"){
        throw new myException("Ups my exception happends");
    }
    else{
        return "OK";
    }
}