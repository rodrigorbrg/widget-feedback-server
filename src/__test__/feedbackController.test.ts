import { FeedBackController } from "../controller";
import { FeedbackModel } from "../repository";

const createFeedback = jest.fn();
const sendEmail = jest.fn();

describe('Submit new feedback', () => {

  it('Should not throw errors', async () => {
    const req = {
      type: 'BUG',
      comment: 'Cor muito escura do app',
    }
    // const controller = FeedBackController(new Prisma(), new Mailtrap()).createNewFeedback(req);

    const controller = FeedBackController({
      createFeedback: async () => {}
    }, {
      sendEmail: async () => {}
    });

    await expect(controller.createNewFeedback(req as FeedbackModel)).resolves.not.toThrow();
  })

  it('Should call createFeedback and sendEmail', async () => {
    const req = {
      type: 'BUG',
      comment: 'Cor muito escura do app',
    }

    const controller = FeedBackController({ createFeedback }, { sendEmail });

    await controller.createNewFeedback(req as FeedbackModel);

    expect(createFeedback).toHaveBeenCalled();
    expect(sendEmail).toHaveBeenCalled();
  })
  
})
