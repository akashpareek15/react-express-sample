const express = require('express');
import { Question } from '../models/Questions.ts';

export const questionRoute = express.Router();

// Route for Save a new Book
questionRoute.post('/', async (request, response) => {
  try {
    const { description, value, additionalRemarkType, additionalRemark } = request.body;
    const question = await Question.create({ description, value, additionalRemarkType, additionalRemark });
    return response.status(201).send(question);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
questionRoute.get('/', async (request, response) => {
  try {
    const questions = await Question.find({});

    return response.status(200).json({
      count: questions.length,
      data: questions,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
questionRoute.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Question.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
questionRoute.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Question.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: 'Question not found' });
    }

    return response.status(200).send({ message: 'Question updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
questionRoute.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Question.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Question not found' });
    }

    return response.status(200).send({ message: 'Question deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
