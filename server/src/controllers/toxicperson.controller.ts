// prettier-ignore
import express from 'express';
import { IToxicPerson } from '../models/toxicperson.model';
import {
  addToxicPerson,
  getAll,
  deleteUserById,
  getUserByName,
} from '../services/toxicperson.service';
import StatusCode from '../util/statusCode';
import ApiError from '../util/apiError';

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
  const { firstName } = req.params;
  if (!firstName) {
    next(ApiError.missingFields(['firstName']));
    return;
  }

  // Check if user to delete is an admin
  const user: IToxicPerson | null = await getUserByName(firstName);
  if (!user) {
    next(ApiError.notFound(`User with name ${firstName} does not exist`));
    return;
  }

  deleteUserById(user._id)
    .then(() => res.sendStatus(StatusCode.OK))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch((e) => {
      next(ApiError.internal('Failed to delete user.'));
    });
};

export { getAllPeople, addToxicPersonController, deleteToxicPerson };
