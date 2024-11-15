import { addData, deleteData, getData, updateData } from "../src/databaseService";

describe('test data sql', () => {
    test('addData', async () => {
        const name = "Lutfiya Ainurrahman Prasetyo";
        const add = await addData(name);
        expect(add).toBe(1);
    });

    // // problem di getData
    // test('getData', async () => {
    //     const gets = await getData();
    //     for(const get of gets){
    //         console.info(`Result get id :  ${get.id} and name = ${get.name}`);
    //     }
    //     // expect(get.length).toBeGreaterThanOrEqual(0); // Tambahkan pengecekan minimal
    // });
    

    test('updateData',async () => {
        const id = 4;
        const newName = "update lagi"
        const update = await updateData(id, newName);
        expect(update).toBe(1);
    });

    test('deleteData',async () => {
        const id =5;
        const deleteDataUsers = await deleteData(id);
        expect(deleteDataUsers).toBe(1);
    });
});