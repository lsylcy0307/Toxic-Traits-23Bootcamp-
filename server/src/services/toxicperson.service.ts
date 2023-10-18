// prettier-ignore

import { IToxicPerson, ToxicPerson } from '../models/toxicperson.model';

const addToxicPerson = async (toxicperson: IToxicPerson) => {
  const newToxicPerson = new ToxicPerson(toxicperson);
  const result = await newToxicPerson.save();
  return result;
};

const getUserByName = async (name: string) => {
  const user = await ToxicPerson.findOne({ name }).exec();
  return user;
};

/*
.select(removeSensitiveDataQuery)
*/

const getAll = async () => {
  const toxicPeople = await ToxicPerson.find();
  return toxicPeople;
};

const deleteUserById = async (id: string) => {
  const user = await ToxicPerson.findByIdAndDelete(id);
  return user;
};

export { addToxicPerson, getAll, deleteUserById, getUserByName };
