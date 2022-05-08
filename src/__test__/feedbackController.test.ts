import { FeedBackController } from "../controller";
import { FeedbackModel } from "../repository";


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

  it('Should call createFeedback', async () => {
    const req = {
      type: 'BUG',
      comment: 'Cor muito escura do app',
    }

    const controller = FeedBackController({
      createFeedback: async () => {}
    }, {
      sendEmail: async () => {}
    });

    await expect(controller.createNewFeedback(req as FeedbackModel)).resolves.not.toThrow();
  })

  it('Should call sendEmail', async () => {
    const req = {
      type: 'BUG',
      comment: 'Cor muito escura do app',
    }

    const controller = FeedBackController({
      createFeedback: async () => {}
    }, {
      sendEmail: async () => {}
    });

    await expect(controller.createNewFeedback(req as FeedbackModel)).resolves.not.toThrow();
  })
})
