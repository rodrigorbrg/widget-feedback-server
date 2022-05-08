import Database, { FeedbackModel } from '../repository';
import Email, { EmailModel } from '../service';

const FeedBackController = (repository: Database, email: Email) => {
  const createNewFeedback = async (request: FeedbackModel) => {
    //Create
    repository.createFeedback(request);

    //Send Email
    email.sendEmail(request as EmailModel);
  }

  return {
    createNewFeedback,
  }
}

export default FeedBackController;