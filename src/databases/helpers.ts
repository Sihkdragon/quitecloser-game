import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
// const ID = atom<number[]>([]);
const ID = atomWithStorage<number[]>("id", []);
const removeID = atom(0);
// const addID = atom((get) => get(ID).push(removeID));
// function helpers() {}
export { removeID, ID };
