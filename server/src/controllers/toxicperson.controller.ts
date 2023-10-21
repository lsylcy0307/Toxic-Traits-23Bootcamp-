// prettier-ignore
import express from 'express';
import {
  addToxicPerson,
  getAll,
  deleteUserById,
  getUserById,
} from '../services/toxicperson.service';
import StatusCode from '../util/statusCode';
import ApiError from '../util/apiError';

const getUserController = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { id } = req.params;
  if (!id) {
    next(ApiError.missingFields(['id']));
  }
  const user = await getUserById(id);
  res.json(user);
  return user;
};

const getAllPeople = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  return (
    getAll()
      .then((toxicPeopleList) => {
        res.status(StatusCode.OK).send(toxicPeopleList);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((e) => {
        next(ApiError.internal('Unable to retrieve all toxic people'));
      })
  );
};

const addToxicPersonController = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { body } = req;
  try {
    await addToxicPerson(body);
    res.sendStatus(StatusCode.CREATED);
  } catch (err) {
    next(ApiError.internal('failed to add a toxic person'));
  }
};

const deleteToxicPerson = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { id } = req.params;
  if (!id) {
    next(ApiError.missingFields(['id']));
    return;
  }
  try {
    await deleteUserById(id);
    res.sendStatus(StatusCode.OK);
  } catch (e) {
    next(ApiError.internal('Failed to delete user.'));
  }
};

export {
  getUserController,
  getAllPeople,
  addToxicPersonController,
  deleteToxicPerson,
};
