import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

jest.mock("../src/user-repository.js");

const repository = new UserRepository();
const service = new UserService(repository);

test('test mock class save', () => {
    const user = { id: 1, name: "Lutfiya" };
    service.save(user);
    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(user);
});

test('test mock class findById', () => {
    const user = { id: 1, name: "Lutfiya" };
    repository.findById.mockReturnValueOnce(user);
    expect(service.findById(1)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled();
});

test('test mock class findAll', () => {
    const user = [{ id: 1, name: "Lutfiya" }, { id: 2, name: "Ainurrahman" }];
    repository.findAll.mockReturnValueOnce(user);
    expect(service.findAll()).toEqual(user);
    expect(repository.findAll).toHaveBeenCalled();
});